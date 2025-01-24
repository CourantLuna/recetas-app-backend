const config = require('./config/db.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const recetaRoutes = require('./routes/recetaRoutes');
const recetaIngredienteRoutes = require('./routes/recetaIngredienteRoutes');
const ingredienteRoutes = require('./routes/ingredienteRoutes');
const searchRoutes = require('./routes/searchRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express();
// Middleware para parsear JSON
app.use(express.json());

app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', authRoutes);

// Rutas
app.use('/api/recetas', recetaRoutes);
app.use('/api/recetaingredientes', recetaIngredienteRoutes);
app.use('/api/ingredientes', ingredienteRoutes);

app.use('/api/search', searchRoutes); 

console.log(`Starting server in ${config.NODE_ENV} mode...`);
// Conexión a la base de datos

app.get('/', (req, res) => {
res.send('Servidor funcionando correctamente');
});
// Inicia el servidor Express
app.listen(config.PORT, config.HOST, () => {
console.log(`Server running at
http://${config.HOST}:${config.PORT}`);
});
