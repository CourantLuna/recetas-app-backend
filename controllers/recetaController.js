const Receta = require('../models/receta');
const axios = require('axios'); // Usaremos axios para llamar al endpoint
const { Op } = require('sequelize');


// **1. Obtener todas las recetas**
exports.getAllRecetas = async (req, res) => {
  try {
    const recetas = await Receta.findAll();
    res.status(200).json(recetas);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};

// **2. Crear una nueva receta**
exports.createReceta = async (req, res) => {
  try {
    console.log("Datos recibidos en el backend:", req.body);

    const nuevaReceta = await Receta.create(req.body);
    res.status(201).json(nuevaReceta); // Enviar la receta creada al frontend
  } catch (error) {
    console.error("Error creando receta en el backend:", error.message);
    res.status(500).json({ message: "Error creating data", error: error.message }); // Enviar mensaje de error al frontend
  }
};

// **3. Obtener una receta por ID**
exports.getRecetaById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10); // Convierte el ID a entero

    const receta = await Receta.findByPk(id); // Busca por clave primaria
    if (!receta) {
      return res.status(404).json({ message: 'Receta not found' });
    }
    res.status(200).json(receta);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};

// **4. Actualizar una receta**
exports.updateReceta = async (req, res) => {
  try {
    const receta = await Receta.findByPk(req.params.id);
    if (!receta) {
      return res.status(404).json({ message: 'Receta not found' });
    }
    await receta.update(req.body); // Actualiza los datos de la receta
    res.status(200).json(receta);
  } catch (error) {
    res.status(500).json({ message: 'Error updating data', error: error.message });
  }
};

// **5. Eliminar una receta**
// **Eliminar una receta junto con sus ingredientes relacionados usando Axios**
exports.deleteReceta = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    // Verificar si la receta existe
    const receta = await Receta.findByPk(id);
    if (!receta) {
      return res.status(404).json({ message: 'Receta not found' });
    }

    // Llamar al endpoint de receta-ingredientes para eliminar los ingredientes vinculados
    const recetaIngredientesEndpoint = `http://localhost:3001/api/recetaingredientes/receta/${id}`;
    try {
      const recetaIngredientesResponse = await axios.delete(recetaIngredientesEndpoint);
      console.log(recetaIngredientesResponse.data.message); // Log de éxito o mensaje relacionado
    } catch (error) {
      // Manejar el caso en que no hay registros en la tabla puente
      if (error.response && error.response.status === 404) {
        console.log(`No hay ingredientes relacionados con la receta ${id}. Continuando con la eliminación...`);
      } else {
        throw error; // Propaga otros errores inesperados
      }
    }

    // Eliminar la receta después de manejar los ingredientes relacionados
    await receta.destroy();

    res.status(200).json({ message: 'Receta y sus ingredientes relacionados eliminados exitosamente' });
  } catch (error) {
    console.error(`Error eliminando la receta:`, error);
    res.status(500).json({ message: 'Error deleting recipe', error: error.message });
  }
};


exports.searchRecetas = async (req, res) => {
  try {
    const searchTerm = req.query.p; // Capturar el término de búsqueda desde 'p'

    // Validar que el parámetro sea válido
    if (!searchTerm || typeof searchTerm !== 'string' || !searchTerm.trim()) {
      return res.status(400).json({ message: 'Invalid search term. Provide a valid string for the "p" query parameter.' });
    }

    // Realizar la consulta usando LIKE (insensible a mayúsculas/minúsculas)
    const recetas = await Receta.findAll({
      where: {
        Nombre: {
          [Op.like]: `%${searchTerm.trim()}%`, // Buscar recetas cuyo nombre contenga el término
        },
      },
    });

    // Responder con los resultados
    res.status(200).json(recetas);
  } catch (error) {
    console.error('Error buscando recetas:', error);
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};




