require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const _get = require('lodash/get')
const { response } = require('express')

const app = express()
const port = 3030

app.get('/movies', cors(), async (req, res) => {
  const { title } = req.query

  try {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        query: title,
        api_key: process.env.TMDB_KEY,
      },
    })
    const {
      results,
    } = response.data

    const options = results.map(movie => {
      return {
        value: `${movie.id}`,
        label: movie.title,
      }
    })

    res.status(200).send(options)
  } catch (error) {
    console.log(error);
    const { message } = _get(error, 'response.data')
    res.status(response.status).send(message)
  }
})

app.get('/movie-details', cors(), async (req, res) => {
  const { movieId } = req.query

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        api_key: process.env.TMDB_KEY,
      },
    })
    const results = response.data
    
    res.status(200).send(results)
  } catch (error) {
    console.log(error);
    const { message } = _get(error, 'response.data')
    res.status(response.status).send(message)
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})