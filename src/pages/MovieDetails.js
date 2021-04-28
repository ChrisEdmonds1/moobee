import _get from 'lodash/get';
import { useHistory, useLocation } from 'react-router-dom'
import { Button } from 'antd'

function MovieDetails() {
  const location = useLocation()
  const history = useHistory()
  if (!_get(location, 'state.details')) {
    history.push('/')
  }
  const {
    title,
    overview,
    poster_path,
    release_date,
  } = location.state.details

  const onClick = async () => {
    try {
      history.push('/')
    } catch (error) {
      console.error('💔', error);
    }

  }

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          { title }
        </h1>
        <div className="movie-info">
          <div className="movie-info__image">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="Movie poster"/>
          </div>
          <div className="movie-info__details">
            <h3>Released</h3>
            <p>{release_date}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <Button className="movie-info__button" type="primary" onClick={ onClick }>Back</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MovieDetails;