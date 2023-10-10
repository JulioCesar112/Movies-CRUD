const express = require('express')
const app = express()
const db = require('./utils/database')
const { port } = require('./config')
const initModels = require('./models/initModels')
const moviesRouter = require('./movies/movies.router')
const cors = require('cors')
app.use(express.json())
app.use(cors())


db.authenticate()
  .then(() => console.log('DB Authentication Succesfully'))
  .catch(err => console.log(err))

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err))


app.use('/movies', moviesRouter)


app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})