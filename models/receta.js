const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Definición del modelo Receta
const Receta = sequelize.define('Receta', {
  RecetaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Descripcion: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  TiempoPreparacion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Instrucciones: {
    type: DataTypes.JSON, // Almacena múltiples pasos o instrucciones
    allowNull: true,
  },
  Porciones: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  Puntuacion: {
    type: DataTypes.DECIMAL(3, 2), // Rango: 0.00 a 9.99
    allowNull: true,
  },
  NumeroValoraciones: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  Utensilios: {
    type: DataTypes.TEXT, // Almacena utensilios necesarios en formato texto largo
    allowNull: true,
  },
  Autor: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: 'Desconocido',
  },
  Categoria: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'Sin categoría',
  },
  Dificultad: {
    type: DataTypes.STRING(20),
    allowNull: true,
    validate: {
      isIn: [['Fácil', 'Medio', 'Difícil']], // Validación de valores permitidos
    },
  },
  Tags: {
    type: DataTypes.TEXT, // Almacena etiquetas separadas por comas o en formato JSON
    allowNull: true,
  },
  InformacionNutricional: {
    type: DataTypes.JSON, // Almacena datos como JSON (calorías, grasas, etc.)
    allowNull: true,
  }, 
  ImageUrl: {
    type: DataTypes.STRING, // Usamos STRING porque almacenamos una URL
    allowNull: true, // Puede ser NULL si no se proporciona
    defaultValue: "https://via.placeholder.com/800x400",
  },
}, {
  tableName: 'Recetas', // Nombre de la tabla en la base de datos
  timestamps: false,    // Si no usas columnas createdAt y updatedAt
});

module.exports = Receta;
