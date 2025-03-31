const express = require('express');
const serviciosController = require('../controllers/servicios.controller');
const { verificarToken, verificarRol } = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Servicios
 *   description: Gestión de servicios (1=admin)
 */

router.get('/', serviciosController.obtenerServicios); // Público

router.post('/',
  verificarToken,
  verificarRol([1]), // Solo admin
  serviciosController.crearServicio
);

module.exports = router;