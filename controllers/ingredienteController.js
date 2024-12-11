const Ingrediente = require('../models/ingrediente');

// Obtener todos los ingredientes
exports.getAll = async (req, res) => {
  try {
    const ingredientes = await Ingrediente.findAll();
    res.status(200).json(ingredientes);
  } catch (error) {
    console.error('Error obteniendo ingredientes:', error);
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};

// Crear un nuevo ingrediente
exports.create = async (req, res) => {
  try {
    const nuevoIngrediente = await Ingrediente.create(req.body);
    res.status(201).json(nuevoIngrediente);
  } catch (error) {
    console.error('Error creando ingrediente:', error);
    res.status(500).json({ message: 'Error creating data', error: error.message });
  }
};

// Obtener un ingrediente por ID
exports.getById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const ingrediente = await Ingrediente.findByPk(id);
    if (!ingrediente) {
      return res.status(404).json({ message: 'Ingrediente not found' });
    }

    res.status(200).json(ingrediente);
  } catch (error) {
    console.error('Error obteniendo el ingrediente:', error);
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};

// Actualizar un ingrediente
exports.update = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const ingrediente = await Ingrediente.findByPk(id);
    if (!ingrediente) {
      return res.status(404).json({ message: 'Ingrediente not found' });
    }

    await ingrediente.update(req.body);
    res.status(200).json(ingrediente);
  } catch (error) {
    console.error('Error actualizando ingrediente:', error);
    res.status(500).json({ message: 'Error updating data', error: error.message });
  }
};

// Eliminar un ingrediente
exports.delete = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const ingrediente = await Ingrediente.findByPk(id);
    if (!ingrediente) {
      return res.status(404).json({ message: 'Ingrediente not found' });
    }

    await ingrediente.destroy();
    res.status(200).json({ message: 'Ingrediente deleted successfully' });
  } catch (error) {
    console.error('Error eliminando ingrediente:', error);
    res.status(500).json({ message: 'Error deleting data', error: error.message });
  }
};
