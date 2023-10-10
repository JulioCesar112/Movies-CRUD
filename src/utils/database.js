const { Sequelize } = require('sequelize')
const config = require('../config')

const db = new Sequelize({
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // Requiere SSL
      rejectUnauthorized: false, // Desactiva la verificación del certificado (no recomendado en producción)
    },
  },
  host: config.db.host,
  username: config.db.useName,
  password: config.db.password,
  database: config.db.database,
  port: 5432
})



module.exports = db