const express = require('express');
const empleadosController = require('../controllers/empleados.controller');
const { verificarToken, verificarRol } = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Empleados
 *   description: Gestión de empleados (1=admin)
 */

router.get('/', 
  verificarToken,
  verificarRol([1]), // Solo admin
  empleadosController.obtenerEmpleados
);

router.post('/',
  verificarToken,
  verificarRol([1]), // Solo admin
  empleadosController.crearEmpleado
);

router.put('/:id',
  verificarToken,
  verificarRol([1]), // Solo admin
  empleadosController.actualizarEmpleado
);

router.delete('/:id',
  verificarToken,
  verificarRol([1]), // Solo admin
  empleadosController.eliminarEmpleado
);

module.exports = router;