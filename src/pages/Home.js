import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Typography } from 'antd'
import { getMovies, getMovieDetails } from '../apiHelper'
import SearchField from '../components/SearchField'

const { Text } = Typography

function Home() {
  const history = useHistory()

  const onSearch = async title => {
    const response = await getMovies(title)
    if (response) {
      setMovieOptions(response)
    } else {
      setErrorMessage(response)
    }
  }

  const onSelect = async selection => {
    try {
      const response = await getMovieDetails(selection)

      setSelectedMovie(response)
    } catch (error) {
      console.error('💔', error);
    }
  }

  const [movieOptions, setMovieOptions] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(undefined)
  const [errorMessage, setErrorMessage] = useState(undefined)

  useEffect(() => {
    if (selectedMovie) {
      setErrorMessage(undefined)

      history.push('/movie', { details: selectedMovie})
    }
  }, [selectedMovie, history])
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          🐄MooBee🐝
        </h1>

        <div>
          <SearchField
            onSearch={ onSearch }
            onSelect={ onSelect }
            options={ movieOptions }
          />
        </div>
        {errorMessage && <Text type="danger">{ errorMessage }</Text>}

      </main>
    </div>
  );
}

export default Home;