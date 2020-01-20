import React from 'react';
import axios from 'axios';
import MoviesList from './MoviesList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      movies: [], 
      genres: [], 
      rating: 3,
      showMovie: true,
    }
  }
  

  componentDidMount(){
    // create variables to hols api endpoints and sections
    const baseUrl = 'https://api.themoviedb.org/';
    const apiKey = 'api_key=cc28bf2af89434d1706a5f06b40b8379';
    const moviesPopular = 'movie/now_playing';
    const genres = 'genre/movie/list';

    // Build the api urls to make requests to
    const moviesApi = `${baseUrl}3/${moviesPopular}?${apiKey}`;
    const genresApi = `${baseUrl}3/${genres}?${apiKey}`;

    // Add the get requests  
    const requestMovies = axios.get(moviesApi);
    const requestGenres = axios.get(genresApi);

    // Make multiple requests for the 2 data sets
    axios.all([requestMovies, requestGenres]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]


      // Drill down to the actual data in the response;
      const movies = responseOne.data.results;
      // Sort the movies by popularity
      const moviesSorted = movies.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
      // Add a new property to the objects in the list to show / hide the movie
      moviesSorted.forEach(function (movie) {
        movie.show = true;
      });

      console.log(moviesSorted, responseTwo.data.genres);

      // Add the api data to the app state
      this.setState({movies:moviesSorted, genres:responseTwo.data.genres})
      })).catch(errors => {
      console.log(errors);
    })
  }

  handleChange =  (event) => {
    this.setState({
      rating: event.currentTarget.value
    }, () => { // arrow function, ES2015
      console.log(this.state.rating);
      // call this.props.onUserInput(this.state.value)
    });
  }

  render() {

    return (
      <React.Fragment>
        <header>
          <h1>bb</h1>
          <input 
            type="range"
            min="1" max="10"
            className="slider"
            value={this.state.rating}
            step="0.5"
            onChange={this.handleChange}
          />
        </header>
      <main>
        <MoviesList movies={this.state.movies} rating={this.state.rating} genres={this.state.genres} />
      </main>
      </React.Fragment>
    )
  }
}

export default App;