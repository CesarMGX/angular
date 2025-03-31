const jwt = require('jsonwebtoken');
const pool = require('../db');

// 1. Middleware de autenticación (versión mejorada)
const verificarToken = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Verificar en DB que el usuario exista
        const { rows: [usuario] } = await pool.query(
            'SELECT id, rol_id FROM USUARIOS WHERE id = $1 AND delete_at IS NULL',
            [decoded.id]
        );

        if (!usuario) {
            return res.status(401).json({ error: 'Usuario no existe' });
        }

        req.usuario = {
            id: usuario.id,
            rol_id: usuario.rol_id
        };

        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};

// 2. Middleware de autorización (versión optimizada)
const verificarRol = (rolesPermitidos) => {
    return (req, res, next) => {
        if (!req.usuario?.rol_id) {
            return res.status(403).json({ error: 'Rol no definido' });
        }

        if (!rolesPermitidos.includes(req.usuario.rol_id)) {
            return res.status(403).json({ 
                error: `Acceso denegado. Requiere rol: ${rolesPermitidos.join(', ')}` 
            });
        }
        next();
    };
};

// Exportación CORRECTA (igual que tu versión original)
module.exports = { 
    verificarToken, 
    verificarRol 
};