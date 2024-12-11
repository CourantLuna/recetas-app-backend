const express = require('express');
const router = express.Router();
const { searchRecetas } = require('../controllers/recetaController'); // Asegúrate de importar correctamente el controlador
const {searchIngrediente} = require('../controllers/ingredienteController');

// Endpoint: /api/search/recetas?p=tu_término
// Ruta para buscar recetas
router.get('/recetas', searchRecetas);
// Ruta para buscar ingredientes
router.get('/ingredientes', searchIngrediente);

module.exports = router;
