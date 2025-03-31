const express = require('express');
const { iniciarSesion, registrarUsuario } = require('../controllers/auth.controller');

const router = express.Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 */
router.post('/login', iniciarSesion);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Auth]
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 */
router.post('/register', registrarUsuario);

module.exports = router;
