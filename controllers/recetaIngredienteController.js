const RecetaIngrediente = require('../models/recetaIngrediente');
const Ingrediente = require('../models/ingrediente');

// **1. Obtener todos los registros de la tabla puente**
exports.getAll = async (req, res) => {
  try {
    const recetaIngredientes = await RecetaIngrediente.findAll();
    res.status(200).json(recetaIngredientes);
  } catch (error) {
    console.error('Error obteniendo registros:', error);
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};

// **2. Crear un nuevo registro en la tabla puente**
exports.create = async (req, res) => {
  try {
    const { RecetaID, IngredienteID, Cantidad, Unidad } = req.body;

    // Validar datos requeridos
    if (!RecetaID || !IngredienteID || !Cantidad) {
      return res.status(400).json({ message: 'RecetaID, IngredienteID y Cantidad son obligatorios' });
    }

    const nuevoRegistro = await RecetaIngrediente.create({ RecetaID, IngredienteID, Cantidad, Unidad });
    res.status(201).json(nuevoRegistro);
  } catch (error) {
    console.error('Error creando registro:', error);
    res.status(500).json({ message: 'Error creating data', error: error.message });
  }
};

// **3. Obtener registros relacionados con una receta**
exports.getByRecetaId = async (req, res) => {
  try {
    const recetaId = parseInt(req.params.recetaId, 10);
    if (isNaN(recetaId)) {
      return res.status(400).json({ message: 'Invalid RecetaID format' });
    }

    const registros = await RecetaIngrediente.findAll({
      where: { RecetaID: recetaId },
      include: [
        {
          model: Ingrediente,
          attributes: ['IngredienteID', 'Nombre', 'Unidad', 'Marca'],
        },
      ],
    });

    if (registros.length === 0) {
      return res.status(404).json({ message: 'No se encontraron ingredientes para esta receta' });
    }

    res.status(200).json(registros);
  } catch (error) {
    console.error('Error obteniendo registros:', error);
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};

// **4. Actualizar un registro en la tabla puente**
// **Actualizar un registro en la tabla puente**
exports.update = async (req, res) => {
  try {
    const { recetaId, ingredienteId } = req.params; // Claves primarias
    const { Cantidad } = req.body; // Campo a actualizar

    // Validar las claves primarias
    if (!recetaId || !ingredienteId) {
      return res.status(400).json({ message: 'RecetaID e IngredienteID son obligatorios' });
    }

    // Buscar el registro por las claves primarias
    const registro = await RecetaIngrediente.findOne({
      where: {
        RecetaID: recetaId,
        IngredienteID: ingredienteId,
      },
    });

    if (!registro) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }

    // Actualizar el registro
    await registro.update({ Cantidad });
    res.status(200).json({
      message: 'Registro actualizado exitosamente',
      registro,
    });
  } catch (error) {
    console.error('Error actualizando el registro:', error);
    res.status(500).json({ message: 'Error updating record', error: error.message });
  }
};


// **5. Eliminar todos los registros relacionados con una receta**
exports.deleteByRecetaId = async (req, res) => {
  try {
    const recetaId = parseInt(req.params.id, 10);
    if (isNaN(recetaId)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    // Eliminar los registros relacionados
    const deletedCount = await RecetaIngrediente.destroy({
      where: { RecetaID: recetaId },
    });

    if (deletedCount === 0) {
      return res.status(404).json({
        message: `No hay registros relacionados con la receta ${recetaId}`,
      });
    }

    res.status(200).json({
      message: `Deleted ${deletedCount} related ingredients successfully`,
    });
  } catch (error) {
    console.error('Error eliminando ingredientes relacionados:', error);
    res.status(500).json({ message: 'Error deleting related ingredients', error: error.message });
  }
};


// **6. Eliminar un solo registro de la tabla puente**
// Eliminar un registro específico por RecetaID e IngredienteID
exports.deleteByIds = async (req, res) => {
  try {
    const { recetaId, ingredienteId } = req.params; // Claves primarias

    // Validar que los parámetros existen
    if (!recetaId || !ingredienteId) {
      return res.status(400).json({ message: 'RecetaID e IngredienteID son obligatorios' });
    }

    // Buscar y eliminar el registro por las claves primarias
    const deletedCount = await RecetaIngrediente.destroy({
      where: {
        RecetaID: recetaId,
        IngredienteID: ingredienteId,
      },
    });

    // Verificar si se eliminó algún registro
    if (deletedCount === 0) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }

    res.status(200).json({ message: 'Registro eliminado exitosamente' });
  } catch (error) {
    console.error('Error eliminando el registro:', error);
    res.status(500).json({ message: 'Error deleting record', error: error.message });
  }
};


// **7. Obtener un registro específico por RecetaID e IngredienteID**
exports.getByIds = async (req, res) => {
  try {
    const { recetaId, ingredienteId } = req.params; // Claves primarias de la tabla

    // Validar las claves primarias
    if (!recetaId || !ingredienteId) {
      return res.status(400).json({ message: 'RecetaID e IngredienteID son obligatorios' });
    }

    // Buscar el registro por las claves primarias
    const registro = await RecetaIngrediente.findOne({
      where: {
        RecetaID: recetaId,
        IngredienteID: ingredienteId,
      },
    });

    // Verificar si el registro existe
    if (!registro) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }

    res.status(200).json(registro);
  } catch (error) {
    console.error('Error obteniendo el registro:', error);
    res.status(500).json({ message: 'Error fetching record', error: error.message });
  }
};

