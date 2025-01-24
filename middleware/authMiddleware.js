const jwt = require("jsonwebtoken");
const config = require('../config/db.js');
const Usuario = require('../models/usuario');


const verificarToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const usuario = await Usuario.findByPk(decoded.id);

    if (!usuario) {
      throw new Error();
    }

    req.usuario = usuario; // Agregando el usuario a la request para otros middleware o rutas
    next();
  } catch (error) {
    res.status(401).json({ mensaje: 'Token no válido' });
  }
};

const verificarRol = (rolesPermitidos) => (req, res, next) => {
  const { roles } = req.usuario;

  if (!roles || !roles.some((rol) => rolesPermitidos.includes(rol))) {
    return res.status(403).json({ mensaje: "Permiso denegado" });
  }

  next();
};

module.exports = { verificarToken, verificarRol };
