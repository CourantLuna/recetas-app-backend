const express = require('express');
const {
  getAll,
  create,
  getByRecetaId,
  getByIds,
  update,
  deleteByRecetaId,
  deleteByIds,
} = require('../controllers/recetaIngredienteController');

const router = express.Router();

router.get('/', getAll);
router.post('/', create);
router.get('/receta/:recetaId', getByRecetaId);


// **Obtener un registro específico por RecetaID e IngredienteID**
router.get('/:recetaId/:ingredienteId', getByIds); // Nueva ruta para el GET por IDs

// **Actualizar un registro de la tabla puente**
router.put('/:recetaId/:ingredienteId', update);

router.delete('/receta/:id', deleteByRecetaId); // Elimina todos los ingredientes relacionados con una receta
router.delete('/:recetaId/:ingredienteId', deleteByIds);// **Eliminar un solo registro por RecetaID e IngredienteID**


module.exports = router;
