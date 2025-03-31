const pool = require("../db");

// Obtener todas las citas
exports.obtenerCitas = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM citas"); // Sin filtro delete_at
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener citas" });
    }
};

// Crear una cita
exports.crearCita = async (req, res) => {
    try {
        const { fecha_cita, ubicacion, id_cliente } = req.body;
        const result = await pool.query(
            "INSERT INTO citas (fecha_cita, ubicacion, id_cliente) VALUES ($1, $2, $3) RETURNING *",
            [fecha_cita, ubicacion, id_cliente]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Error al crear cita" });
    }
};

// Actualizar una cita
exports.actualizarCita = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha_cita, ubicacion, id_cliente } = req.body;
        const result = await pool.query(
            "UPDATE citas SET fecha_cita = $1, ubicacion = $2, id_cliente = $3, update_at = NOW() WHERE id = $4 RETURNING *",
            [fecha_cita, ubicacion, id_cliente, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar cita" });
    }
};

// Eliminar físicamente una cita
exports.eliminarCita = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM citas WHERE id = $1", [id]); // Borrado físico
        res.json({ mensaje: "Cita eliminada permanentemente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar cita" });
    }
};