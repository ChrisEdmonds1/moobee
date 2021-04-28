import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie">
            <MovieDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
