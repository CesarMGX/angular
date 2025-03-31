const express = require('express');
const clienteController = require('../controllers/clientes.controller');
const { verificarToken, verificarRol } = require("../middlewares/authMiddleware");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Gestión de clientes (1=admin, 2=empleado)
 */

router.get('/', 
  verificarToken, 
  verificarRol([1]), // Solo admin
  clienteController.obtenerClientes
);

router.post('/',
  verificarToken,
  verificarRol([1, 2]), // Admin o empleado
  clienteController.crearCliente
);

router.put('/:id',
  verificarToken,
  verificarRol([1, 2]), // Admin o empleado
  clienteController.actualizarCliente
);

router.delete('/:id',
  verificarToken,
  verificarRol([1]), // Solo admin
  clienteController.eliminarCliente
);

module.exports = router;