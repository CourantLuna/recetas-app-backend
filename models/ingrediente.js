const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Ingrediente = sequelize.define(
  "Ingrediente",
  {
    IngredienteID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Unidad: {
      type: DataTypes.STRING, // Refleja la columna 'Unidad' en la base de datos
    },
    Marca: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PorcionDefault: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    InformacionNutricional: {
      type: DataTypes.JSON, // Usamos JSON para almacenar información nutricional
      allowNull: true,
    },
    CategoriaSupermercado: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Atributos: {
      type: DataTypes.TEXT, // Usamos JSON o texto largo para almacenar etiquetas como "orgánico, fresco"
      allowNull: true,
    },
  },

  {
    tableName: "Ingredientes",
    timestamps: false, // Incluye campos createdAt y updatedAt
  }
);

module.exports = Ingrediente;
