const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*', // Permite todas las fuentes (puedes especificar 'http://192.168.1.70:8100')
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Conexión a MongoDB (usuarios_api)
mongoose.connect('mongodb://localhost/usuarios_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB (usuarios_api) conectado');
}).catch(err => {
  console.error('Error al conectar a MongoDB (usuarios_api):', err);
});

// Conexión a MongoDB (cochesito) - Si necesitas esta base de datos
const cochesitoDb = mongoose.connection.useDb('cochesito');
cochesitoDb.on('connected', () => {
  console.log('MongoDB (cochesito) conectado');
});

// Rutas
app.use('/api', userRoutes);

// Iniciar servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${port}`);
});