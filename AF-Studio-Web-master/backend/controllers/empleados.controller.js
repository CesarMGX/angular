const pool = require('../db');

// Obtener todos los empleados (sin filtro de delete_at)
exports.obtenerEmpleados = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM empleados');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener empleados' });
    }
};

// Crear empleado
exports.crearEmpleado = async (req, res) => {
    try {
        const { nombre, apellidos, RFC, telefono } = req.body;
        const result = await pool.query(
            'INSERT INTO empleados (nombre, apellidos, RFC, telefono) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, apellidos, RFC, telefono]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear empleado' });
    }
};

// Actualizar empleado
exports.actualizarEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellidos, RFC, telefono } = req.body;
        const result = await pool.query(
            'UPDATE empleados SET nombre = $1, apellidos = $2, RFC = $3, telefono = $4, update_at = NOW() WHERE id = $5 RETURNING *',
            [nombre, apellidos, RFC, telefono, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar empleado' });
    }
};

// Eliminar empleado (BORRADO FÍSICO)
exports.eliminarEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM empleados WHERE id = $1', [id]);
        res.json({ mensaje: 'Empleado eliminado permanentemente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar empleado' });
    }
};