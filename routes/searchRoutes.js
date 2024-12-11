const express = require('express');
const router = express.Router();
const { searchRecetas } = require('../controllers/recetaController'); // Asegúrate de importar correctamente el controlador

// Ruta para buscar recetas
router.get('/', searchRecetas); // Endpoint: /api/search?p=tu_término

module.exports = router;
