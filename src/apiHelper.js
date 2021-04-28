import axios from 'axios'
import _get from 'lodash/get'

export const getMovies = async (title) => {
  try {
    const response = await axios.get('http://localhost:3030/movies', {
      params: { title },
    })

    return response.data
  } catch (error) {
    const errorMessage = _get(error, 'response.data')
    return errorMessage
  }
}

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get('http://localhost:3030/movie-details', {
      params: {
        movieId,
      }
    })
    return response.data
  } catch (error) {
    const errorDetails = _get(error, 'response.data')
    console.error('💔', errorDetails);
    return errorDetails.message
  }
}