const express = require("express");
const usuarioController = require("../controllers/usuarios.controller");
const { verificarToken, verificarRol } = require("../middlewares/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Gestión de usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nombre:
 *           type: string
 *         correo:
 *           type: string
 *         rol:
 *           type: string
 *           enum: [admin, empleado]
 */

// Registrar usuario (público o admin)
router.post("/", 
    verificarToken, 
    usuarioController.registrarUsuario
);

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtener todos los usuarios (solo admin)
 *     tags: [Usuarios]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
router.get("/", 
    verificarToken, 
    verificarRol([1]), // Cambiado de ['admin'] a [1]
    usuarioController.obtenerUsuarios
);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Actualizar usuario (solo admin)
 *     tags: [Usuarios]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario actualizado
 */
router.put("/:id", 
    verificarToken, 
    verificarRol([1]), // Cambiado de ['admin'] a [1]
    usuarioController.actualizarUsuario
);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Eliminar usuario (solo admin)
 *     tags: [Usuarios]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Usuario eliminado
 */
router.delete("/:id", 
    verificarToken, 
    verificarRol([1]), // Cambiado de ['admin'] a [1]
    usuarioController.eliminarUsuario
);

module.exports = router;