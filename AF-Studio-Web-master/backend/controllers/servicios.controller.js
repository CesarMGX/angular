const pool = require("../db");

// Obtener todos los servicios
exports.obtenerServicios = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM servicios");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener servicios" });
    }
};

// Crear un servicio
exports.crearServicio = async (req, res) => {
    try {
        const { nombre_servicio, tipo_servicio, ubicacion, precio } = req.body;
        const result = await pool.query(
            "INSERT INTO servicios (nombre_servicio, tipo_servicio, ubicacion, precio) VALUES ($1, $2, $3, $4) RETURNING *",
            [nombre_servicio, tipo_servicio, ubicacion, precio]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Error al crear servicio" });
    }
};
