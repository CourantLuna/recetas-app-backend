const sequelize = require('../config/sequelize');
const Usuario = require("./usuario");
const Rol = require("./rol");
const UsuarioRoles = require("./usuarioRol");
const Receta = require("./receta");
const RecetaIngrediente = require("./recetaIngrediente");
const Ingrediente = require("./ingrediente");

// Definir relaciones
Usuario.belongsToMany(Rol, { through: UsuarioRoles, foreignKey: 'UsuarioID' });
Rol.belongsToMany(Usuario, { through: UsuarioRoles, foreignKey: 'RolID'  });

// Exportar los modelos y Sequelize
module.exports = {
  sequelize,
  Usuario,
  Rol,
  UsuarioRoles,
  Receta,
  RecetaIngrediente,
  Ingrediente
};