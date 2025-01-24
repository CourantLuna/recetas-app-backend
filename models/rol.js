const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Usuario = require("./usuario");
const UsuarioRoles = require("./usuarioRol");

const Rol = sequelize.define("Roles", {
    RolID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NombreRol: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "Roles",
    timestamps: false, // Incluye campos createdAt y updatedAt
  }
  );
// Definir relaciones
  module.exports = Rol;
  