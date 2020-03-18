import React from 'react';
import axios from 'axios';
import MoviesList from './MoviesList';
import Slider from './Slider';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      genres: [],
      genreFilter: [],
      rating: 3
    }
  }
  

  componentDidMount(){
    // create variables to hold api endpoints and sections
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

    // Make requests for the 2 data sets
    axios.all([requestMovies, requestGenres]).then(axios.spread((...responses) => {
      const moviesApi = responses[0].data.results
      const genresApi = responses[1].data.genres

      // Sort the movies by popularity
      const moviesSorted = moviesApi.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
      
      // Add the genre names to the movieSorted list
      moviesSorted.forEach(function (movie) {
        
        let genreIds = movie.genre_ids;
        
        const genreMatch = genresApi.filter(x => genreIds.includes(Number(x.id)))
        movie.genres = genreMatch;

        movie.visibility = "show";

      });
      // Add the sorted movies with the genre names to the app state
      this.setState({ movies: moviesSorted })
      
      // Add genres to the app state
      this.setState({ genres: genresApi })

      })).catch(errors => {
      console.log(errors);
    })
  }

  // Handle the slider changes and update the rating state accordingly
  handleChange =  (event) => {
    this.setState({
      rating: event.currentTarget.value
    });
    console.log(event.currentTarget.value);
  }

  genreCheckbox = (event) => {
    //console.log(event.target.checked, event.target.value);

    this.setState({ genreFilter: event.target.value })
    
    console.log(this.state.genreFilter);

    // this.state.movies.forEach(function (movie) {
    //   if (event.target.value !== movie.genres.name) {
    //     movie.visibility = "Hide";
    //   }

    // });

    
  }

  render() {

    const genres = this.state.genres;

    return (
			<React.Fragment>
				<header>
					<h1>Main title</h1>
          <Slider 
            value={this.state.rating}
          />
					{/* <div className="range-slider">
						<input
							type="range"
							min="1"
							max="10"
							id="slider"
							value={this.state.rating}
							step="0.5"
							onChange={this.handleChange}
						/>
						<span>{this.state.rating}</span>
					</div> */}
					<div className="genre-picker">
						<ul>
							{genres.map((value, index) => {
								return (
									<li key={index}>
										<input
											type="checkbox"
											value={value.name}
											id={value.name}
											onChange={this.genreCheckbox}
										/>
										<label htmlFor={value.name}>{value.name}</label>
									</li>
								);
							})}
						</ul>
					</div>
				</header>
				<main>
					<MoviesList
						movies={this.state.movies}
						rating={this.state.rating}
						genres={this.state.genres}
					/>
				</main>
			</React.Fragment>
		);
  }
}

export default App;