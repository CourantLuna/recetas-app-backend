const dotenv = require('dotenv');
const path = require('path');


// Carga el archivo .env basado en NODE_ENV
dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV || 'development'}.env`)
});

// Verifica la ruta del archivo .env
console.log(`Cargando variables desde: ${path.resolve(__dirname, process.env.NODE_ENV + '.env')}`);

// Imprimir las variables de entorno cargadas
console.log("Configuraciones cargadas:", {
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  DB_SERVER: process.env.DB_SERVER,
  DB_DATABASE: process.env.DB_DATABASE,
  // DB_DOMAIN: process.env.DB_DOMAIN,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD
});

// Configuraciones exportadas
module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST ,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  DB: {
    SERVER: process.env.DB_SERVER ,
    DATABASE: process.env.DB_DATABASE,
    TRUST_CERTIFICATE: process.env.DB_TRUST_CERTIFICATE === 'true',
    AUTH_TYPE: process.env.DB_AUTH_TYPE,
    DOMAIN: process.env.DB_DOMAIN,
    USER: process.env.DB_USER ,
    PASSWORD: process.env.DB_PASSWORD
  }
};
