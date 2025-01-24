const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const UsuarioRoles = require('./usuarioRol'); // Tabla intermedia
const Rol = require('./rol');

const Usuario = sequelize.define("Usuario", {
  UsuarioID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Apellido: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Correo: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  ClaveHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  FechaCreacion: {
    type: DataTypes.DATE  },
},
  {
    tableName: "Usuarios",
    timestamps: false, // Incluye campos createdAt y updatedAt
  }
);
// Relación con Roles
// Definir relaciones
Usuario.belongsToMany(Rol, { through: UsuarioRoles, foreignKey: 'UsuarioID' }); // Relación uno a muchos
module.exports = Usuario;
