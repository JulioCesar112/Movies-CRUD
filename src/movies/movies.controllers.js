const Movies = require('../models/movies.models')
const uuid = require('uuid')

const getAllMovies = async () => {
  const data = await Movies.findAll()
  return data
}
// getAllMovies()
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

const createMovie = async (data) => {
  const newMovie = await Movies.create({
    id: uuid.v4(),
    name: data.name,
    genre: data.genre,
    duration: data.duration,
    releaseDate: data.releaseDate
  })
  return newMovie
}
// createMovie({
//   name: 'Back to the future',
//   genre: 'time',
//   duration: 120,
//   releaseDate: '2011/10/26'
// })


const getMovieById = async (id) => {
  const data = await Movies.findOne({
    where: {
      id
    }
  })
  return data
}
// getMovieById('d0a6a1ff-acdd-45ad-bc19-d8c6d62c7ea1')
// .then(res => console.log(res))
// .catch(err => console.log(err))

const editMovie = async (id, data) => {
  const response = await Movies.update(data, {
    where: {
      id
    }
  })
  return response

}
// editMovie('85e9ca00-12b9-4483-b312-1763e458bfe8',{
//   genre:'Adventure',
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))

const deleteMovieById = async (id) => {
  const data = await Movies.destroy({
    where: {
      id
    }
  })
  return data
}




module.exports = {
  getAllMovies,
  createMovie,
  getMovieById,
  editMovie,
  deleteMovieById
}

