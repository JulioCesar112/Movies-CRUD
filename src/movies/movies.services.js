const moviesControlles = require('./movies.controllers')

const getAllMovies = (req, res) => {
  moviesControlles.getAllMovies()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({ massage: err.massage })
    })
}

const postMovie = (req, res) => {

  const data = req.body

  if (data.name && data.genre && data.duration && data.releaseDate) {
    moviesControlles.createMovie(data)
      .then(response => {
        res.status(201).json(response)
      })
      .catch(err => {
        res.status(400).json({ massage: err.massage })
      })
  } else {
    res.status(400).json({ massage: 'Missing data' })
  }
}

const getMovieById = (req, res) => {
  const id = req.params.id

  moviesControlles.getMovieById(id)
    .then(data => {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(404).json({ message: 'Not Found' })
      }
    })
    .catch(() => {
      res.status(200).json({ message: `Invalid ID` })
    })
}

const patchMovie = (req, res) => {
  const id = req.params.id
  const { name, genre, duration, releaseDate } = req.body

  moviesControlles.editMovie(id, { name, genre, duration, releaseDate })
    .then(() => {
      if (name || genre || duration || releaseDate) {
        res.status(200).json({ message: "Succesfuly Update" })
      } else {
        res.status(400).json({ message: 'Missing Data' })
      }
    })
    .catch(() => {
      res.status(400).json({ message: "Invalid ID" })
    })
}

const putMovie = (req, res) => {
  const id = req.params.id
  const { name, genre, duration, releaseDate } = req.body

    moviesControlles.editMovie(id, { name, genre, duration, releaseDate })
      .then(() => {
        if (name && genre && duration && releaseDate) {
          res.status(200).json({ message: "Succesfuly Update" })
        } else {
          res.status(404).json({ message: 'Missing Data' })
        }
      })
      .catch(() => {
        res.status(400).json({ message: 'invalid ID' })
      })
  }

  const deleteMovie = (req, res) => {
    const id = req.params.id

    moviesControlles.deleteMovieById(id)
      .then((response) => {
        if (response) {
          res.status(204).json()
        } else {
          res.status(200).json({ message: 'No Existe' })
        }
      })
      .catch(() => {
        res.status(200).json({ message: 'Invalid ID' })
      })
  }


  module.exports = {
    getAllMovies,
    postMovie,
    getMovieById,
    patchMovie,
    deleteMovie,
    putMovie
  }