const express = require('express');
const ventasController = require('../controllers/ventas.controller');
const { verificarToken, verificarRol } = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ventas
 *   description: Gestión de ventas (1=admin, 2=empleado)
 */

router.get('/', 
  verificarToken, 
  verificarRol([1, 2]), // Admin o empleado
  ventasController.obtenerVentas
);

router.post('/',
  verificarToken,
  verificarRol([1, 2]), // Admin o empleado
  ventasController.crearVenta
);

router.put('/:id',
  verificarToken,
  verificarRol([1]), // Solo admin
  ventasController.actualizarVenta
);

router.delete('/:id',
  verificarToken,
  verificarRol([1]), // Solo admin
  ventasController.eliminarVenta
);

module.exports = router;