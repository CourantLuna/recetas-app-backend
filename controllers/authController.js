const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { Rol, UsuarioRoles, Usuario } = require('../models/index');
const config = require('../config/db.js');

exports.login = async (req, res) => {
  const { correo, clave } = req.body;

  try {
    const usuario = await Usuario.findOne({
      where: { Correo: correo },
      include: {
        model: Rol,
        through: { attributes: [] }, // Evitar incluir datos de la tabla intermedia
      },
    });
    
    if (!usuario || !(await bcrypt.compare(clave, usuario.ClaveHash))) {
      return res.status(404).json({ mensaje: "Credenciales inválidas" });
    }
    const roles = usuario.Roles.map(rol => rol.NombreRol); // Obtener los roles del usuario

    const token = jwt.sign(
      { id: usuario.UsuarioID, correo: usuario.Correo, roles },
      config.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.json({ token });
    
  } catch (error) {
    res.status(500).json({ mensaje: "Error al iniciar sesión", error });
  }
};

exports.register = async (req, res) => {
  const { nombre, apellido, correo, clave } = req.body;

  try {
      // Cifrar la contraseña con bcrypt
      const claveHash = await bcrypt.hash(clave, 10);

      // Guardar el usuario con la contraseña cifrada
      const nuevoUsuario = await Usuario.create({
          Nombre: nombre,
          Apellido: apellido,
          Correo: correo,
          ClaveHash: claveHash,
      });

      const rolUsuario = await Rol.findOne({ where: { NombreRol: 'Usuario' } });
      if (!rolUsuario) {
        return res.status(500).json({ mensaje: "Rol 'Usuario' no encontrado" });
      }
      
      await nuevoUsuario.addRol(rolUsuario);

      res.status(201).send('Usuario registrado con éxito');
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al registrar usuario');
  }
};