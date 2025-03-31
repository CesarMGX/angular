const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./db');
const authRoutes = require('./routes/auth.routes');
const usuarioRoutes = require('./routes/usuarios.routes');
const clienteRoutes = require('./routes/clientes.routes');
const ventasRoutes = require('./routes/ventas.routes');
const citasRoutes = require('./routes/citas.routes');
const empleadosRoutes = require('./routes/empleados.routes');
const serviciosRoutes = require('./routes/servicios.routes');

// Swagger setup
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Crear la configuración para Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Backend para AF Studio',
      version: '1.0.0',
      description: 'Documentación de la API para gestionar usuarios, ventas, citas, servicios, etc.',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 6005}`,
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT', // Indicar que es un token JWT
        },
      },
    },
  },
  apis: ['./routes/*.js'], // Ruta a tus archivos de rutas donde documentarás los métodos HTTP
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

const app = express();
app.use(cors());
app.use(express.json());

// Rutas Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Verificar conexión a la base de datos
pool.query('SELECT NOW()')
    .then(() => console.log('📌 Conectado a PostgreSQL'))
    .catch(err => {
        console.error('❌ Error al conectar a PostgreSQL:', err);
        process.exit(1);
    });

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/servicios', serviciosRoutes);

const PORT = process.env.PORT || 6005;
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
