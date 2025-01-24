const { Sequelize } = require('sequelize');
const config = require('./db.js');

// Configuración de Sequelize usando variables (.ENV) importadas desde config.js
const sequelize = new Sequelize(config.DB.DATABASE, config.DB.USER, config.DB.PASSWORD, {
  host: config.DB.SERVER,
  dialect: 'mssql',
  dialectOptions: {
    encrypt: true,
    trustServerCertificate: true
  }
});

// Prueba la conexión
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida con Sequelize.');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
})();
console.log("Configuración cargada:", module.exports);

module.exports = sequelize;