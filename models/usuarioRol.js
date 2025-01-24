const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Usuario = require("./usuario");
const Rol = require("./rol");

const UsuarioRoles = sequelize.define("UsuarioRoles", {
    UsuarioID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Usuarios",
        key: "UsuarioID",
      },
    },
    RolID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Roles",
        key: "RolID",
      },
    },
  },
  {
    tableName: "UsuarioRoles",
    timestamps: false, // Incluye campos createdAt y updatedAt
  });


  module.exports = UsuarioRoles;
  