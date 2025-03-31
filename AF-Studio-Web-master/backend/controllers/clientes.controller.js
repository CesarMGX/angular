const pool = require('../db');

// Obtener todos los clientes (sin filtro de delete_at)
exports.obtenerClientes = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM clientes');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener clientes' });
    }
};

// Crear cliente
exports.crearCliente = async (req, res) => {
    try {
        const { nombre, apellidos, direccion, telefono, email } = req.body;
        const result = await pool.query(
            'INSERT INTO clientes (nombre, apellidos, direccion, telefono, email) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nombre, apellidos, direccion, telefono, email]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear cliente' });
    }
};

// Actualizar cliente
exports.actualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellidos, direccion, telefono, email } = req.body;
        const result = await pool.query(
            'UPDATE clientes SET nombre = $1, apellidos = $2, direccion = $3, telefono = $4, email = $5, update_at = NOW() WHERE id = $6 RETURNING *',
            [nombre, apellidos, direccion, telefono, email, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar cliente' });
    }
};

// Eliminar cliente (BORRADO FÍSICO)
exports.eliminarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM clientes WHERE id = $1', [id]);
        res.json({ mensaje: 'Cliente eliminado permanentemente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar cliente' });
    }
};