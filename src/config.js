require('dotenv').config()

const config = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  db: {
    post: process.env.DB_PORT,
    host: process.env.DB_HOST,
    useName: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  }
}

module.exports = config