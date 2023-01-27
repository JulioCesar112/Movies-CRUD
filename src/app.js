const express = require('express')
const app = express()
const db = require('./utils/database')
const { port } = require('./config')
const initModels = require('./models/initModels')
const moviesRouter = require('./movies/movies.router')
app.use(express.json())

db.authenticate()
  .then(() => console.log('DB Authentication Succesfully'))
  .catch(err => console.log(err))

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err))

initModels()

app.get('/', (req, res) => {
  res.status(200).json({ massage: 'OK!' })
})
app.use('/api/v1/movies', moviesRouter)


app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})