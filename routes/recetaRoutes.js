const express = require('express');
const {
    getAllRecetas,
    createReceta,
    getRecetaById,
    updateReceta,
    deleteReceta,
  } = require('../controllers/recetaController');

const router = express.Router();

// Endpoints CRUD
router.get('/', getAllRecetas); // Obtener todas las recetas
router.post('/', createReceta); // Crear una nueva receta
router.get('/:id', getRecetaById); // Obtener una receta por ID
router.put('/:id', updateReceta); // Actualizar una receta
router.delete('/:id', deleteReceta); // Eliminar una receta




module.exports = router;
