const express = require('express');
const {
  getAll,
  create,
  getById,
  update,
  delete: deleteIngrediente
} = require('../controllers/ingredienteController');

const router = express.Router();

// Rutas CRUD para ingredientes
router.get('/', getAll); // Obtener todos los ingredientes
router.post('/', create); // Crear un nuevo ingrediente
router.get('/:id', getById); // Obtener un ingrediente por ID
router.put('/:id', update); // Actualizar un ingrediente
router.delete('/:id', deleteIngrediente); // Eliminar un ingrediente

module.exports = router;
