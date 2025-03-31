const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db');
require('dotenv').config();

// **Registro de usuario**
const registrarUsuario = async (req, res) => {
    const { nombre, correo, contrasena, rol_id = 2 } = req.body; // 2 = Empleado por defecto

    try {
        // 1. Verificar si el correo ya existe
        const { rows } = await pool.query('SELECT * FROM usuarios WHERE correo = $1', [correo]);
        if (rows.length > 0) {
            return res.status(400).json({ error: 'El correo ya está registrado' });
        }

        // 2. Validar rol_id (solo 1 o 2)
        let rolFinal = 2; // Default a empleado
        if (rol_id === 1) { // Si intentan registrar admin
            if (!req.usuario?.rol_id === 1) {
                return res.status(403).json({ error: 'Solo administradores pueden crear admins' });
            }
            rolFinal = 1;
        }

        // 3. Encriptar contraseña
        const contrasenaEncriptada = await bcrypt.hash(contrasena, 10);

        // 4. Insertar usuario
        const result = await pool.query(
            `INSERT INTO usuarios (nombre, correo, contrasena, rol_id) 
             VALUES ($1, $2, $3, $4) 
             RETURNING id, nombre, correo, rol_id`,
            [nombre, correo, contrasenaEncriptada, rolFinal]
        );

        const usuario = result.rows[0];

        // 5. Generar token
        const token = jwt.sign(
            { 
                id: usuario.id,
                correo: usuario.correo,
                rol_id: usuario.rol_id // Usamos rol_id numérico
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json({ 
            mensaje: 'Usuario registrado exitosamente',
            usuario,
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};

// **Inicio de sesión**
const iniciarSesion = async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
        // 1. Buscar usuario
        const { rows } = await pool.query(
            `SELECT id, nombre, correo, contrasena, rol_id 
             FROM usuarios 
             WHERE correo = $1`,
            [correo]
        );

        if (rows.length === 0) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }

        const usuario = rows[0];

        // 2. Validar contraseña
        const esValido = await bcrypt.compare(contrasena, usuario.contrasena);
        if (!esValido) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        // 3. Generar token
        const token = jwt.sign(
            { 
                id: usuario.id,
                correo: usuario.correo,
                rol_id: usuario.rol_id // Usamos rol_id numérico
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // 4. Responder
        res.status(200).json({ 
            mensaje: 'Inicio de sesión exitoso',
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                correo: usuario.correo,
                rol_id: usuario.rol_id // Enviamos rol_id numérico
            },
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};

module.exports = { registrarUsuario, iniciarSesion };