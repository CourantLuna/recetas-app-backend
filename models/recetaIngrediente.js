const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Receta = require('./receta'); // Modelo de Recetas
const Ingrediente = require('./ingrediente'); // Modelo de Ingredientes

const RecetaIngrediente = sequelize.define('RecetaIngrediente', {
  RecetaID: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Parte de la clave primaria compuesta
    allowNull: false,
  },
  IngredienteID: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Parte de la clave primaria compuesta
    allowNull: false,
  },
  Cantidad: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true, // Según la estructura de tu tabla
  },
}, {
  tableName: 'Receta_Ingredientes', // Nombre exacto de la tabla en la base de datos
  timestamps: false, // Desactiva las columnas `createdAt` y `updatedAt`
});

RecetaIngrediente.belongsTo(Receta, { foreignKey: 'RecetaID' });
RecetaIngrediente.belongsTo(Ingrediente, { foreignKey: 'IngredienteID' });

module.exports = RecetaIngrediente;
