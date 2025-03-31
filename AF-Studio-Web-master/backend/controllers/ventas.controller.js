const pool = require("../db");

// Obtener ventas (admin: todas | empleado: solo las suyas)
exports.obtenerVentas = async (req, res) => {
    try {
        let query;
        let params = [];
        
        if (req.usuario.rol_id === 1) { // Cambiado a rol_id
            query = `SELECT v.*, c.nombre as cliente_nombre 
                     FROM ventas v
                     LEFT JOIN clientes c ON v.id_cliente = c.id`;
        } else {
            query = `SELECT v.*, c.nombre as cliente_nombre 
                     FROM ventas v
                     LEFT JOIN clientes c ON v.id_cliente = c.id
                     WHERE v.id_empleado = $1`;
            params = [req.usuario.id_empleado];
        }

        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener ventas" });
    }
};

// Crear venta (admin o empleado)
exports.crearVenta = async (req, res) => {
    try {
        const { monto, id_cliente } = req.body;
        const id_empleado = req.usuario.rol_id === 2 ? req.usuario.id_empleado : null; // Cambiado a rol_id
        
        const result = await pool.query(
            `INSERT INTO ventas (monto, id_cliente, id_empleado) 
             VALUES ($1, $2, $3) 
             RETURNING *`,
            [monto, id_cliente, id_empleado]
        );
        
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Error al crear venta" });
    }
};

// Actualizar venta (solo admin)
exports.actualizarVenta = async (req, res) => {
    try {
        const { id } = req.params;
        const { monto, id_cliente } = req.body;
        
        const result = await pool.query(
            `UPDATE ventas 
             SET monto = $1, id_cliente = $2, update_at = NOW() 
             WHERE id = $3 
             RETURNING *`,
            [monto, id_cliente, id]
        );
        
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar venta" });
    }
};

// Eliminar venta (solo admin)
exports.eliminarVenta = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM ventas WHERE id = $1", [id]);
        res.json({ mensaje: "Venta eliminada permanentemente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar venta" });
    }
};