const pool = require("../db");
const bcrypt = require("bcryptjs");

// Registrar usuario (solo admin puede crear otros admins)
exports.registrarUsuario = async (req, res) => {
    try {
        const { nombre, correo, contrasena, rol = 2 } = req.body; // 2 = Empleado por defecto
        
        // Verificar si el correo ya existe
        const existeUsuario = await pool.query('SELECT * FROM usuarios WHERE correo = $1', [correo]);
        if (existeUsuario.rows.length > 0) {
            return res.status(400).json({ error: "El correo ya está registrado" });
        }

        // Solo admins pueden crear otros admins
        const rolFinal = req.usuario?.rol_id === 1 ? rol : 2; // Cambiado a rol_id y números
        const hashedPassword = await bcrypt.hash(contrasena, 10);

        const result = await pool.query(
            "INSERT INTO usuarios (nombre, correo, contrasena, rol_id) VALUES ($1, $2, $3, $4) RETURNING id, nombre, correo, rol_id",
            [nombre, correo, hashedPassword, rolFinal]
        );

        res.status(201).json({ 
            mensaje: "Usuario registrado", 
            usuario: result.rows[0] 
        });
    } catch (error) {
        res.status(500).json({ error: "Error al registrar usuario" });
    }
};

// Obtener todos los usuarios (sin contraseñas)
exports.obtenerUsuarios = async (req, res) => {
    try {
        const result = await pool.query("SELECT id, nombre, correo, rol_id FROM usuarios");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
};

// Actualizar usuario (solo admin)
exports.actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, correo, rol } = req.body;

        // Validar que solo admins puedan cambiar roles
        const rolFinal = req.usuario.rol_id === 1 ? rol : 2; // Cambiado a rol_id y números

        const result = await pool.query(
            `UPDATE usuarios 
             SET nombre = $1, correo = $2, rol_id = $3, update_at = NOW() 
             WHERE id = $4 RETURNING id, nombre, correo, rol_id`,
            [nombre, correo, rolFinal, id]
        );
        
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar usuario" });
    }
};

// Eliminar usuario (solo admin)
exports.eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);
        res.json({ mensaje: "Usuario eliminado permanentemente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar usuario" });
    }
};