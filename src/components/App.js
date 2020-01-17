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
    }
  }
  

  componentDidMount(){
    const baseUrl = 'https://api.themoviedb.org/';
    const apiKey = 'api_key=cc28bf2af89434d1706a5f06b40b8379';
    const moviesPopular = 'movie/now_playing';
    const genres = 'genre/movie/list';

    const moviesApi = `${baseUrl}3/${moviesPopular}?${apiKey}`;
    const genresApi = `${baseUrl}3/${genres}?${apiKey}`;

    const requestMovies = axios.get(moviesApi);
    const requestGenres = axios.get(genresApi);

    axios.all([requestMovies, requestGenres]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]


      // Drill down to the actual data in the response;
      const movies = responseOne.data.results;
      // Sort the movies by popularity
      const moviesSorted = movies.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
      // Add a new property to the objects in the list - an array for the genres
      moviesSorted.forEach(function (movie) {
        movie.show = true;
      });

      console.log(moviesSorted);

      this.setState({movies:moviesSorted, genres:responseTwo.data.genres})
      })).catch(errors => {
      console.log(errors);
    })
  }

  

  render() {
    return (
      <MoviesList movies={this.state.movies} />
    )
  }
}

export default App;