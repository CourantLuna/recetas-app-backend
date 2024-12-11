const config = require('./config/db.js');
const express = require('express');
const app = express();
// Middleware para parsear JSON
app.use(express.json());
console.log(`Starting server in ${config.NODE_ENV} mode...`);
// Conexión a la base de datos
// Ruta de prueba para verificar que todo funciona
app.get('/', (req, res) => {
res.send('Servidor funcionando correctamente');
});
// Inicia el servidor Express
app.listen(config.PORT, config.HOST, () => {
console.log(`Server running at
http://${config.HOST}:${config.PORT}`);
});
