const express = require('express');
const citasController = require('../controllers/citas.controller');
const { verificarToken, verificarRol } = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Citas
 *   description: Gestión de citas (1=admin, 2=empleado)
 */

router.get('/', verificarToken, citasController.obtenerCitas);

router.post('/', 
  verificarToken, 
  verificarRol([1, 2]), // Admin (1) o empleado (2)
  citasController.crearCita
);

router.put('/:id', 
  verificarToken, 
  verificarRol([1, 2]), // Admin o empleado
  citasController.actualizarCita
);

router.delete('/:id', 
  verificarToken, 
  verificarRol([1]), // Solo admin (1)
  citasController.eliminarCita
);

module.exports = router;