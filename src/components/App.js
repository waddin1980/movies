import React from 'react';
import axios from 'axios';
import MoviesList from './MoviesList';
import Slider from './Slider';
import GenreFilter from './GenreFilter';
import './App.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		movies: [],
		genres:[],
		genresCheckboxes: [],
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

			// Add genres to the genres state
			this.setState({genres: genresApi});

			// Sort the movies by popularity
			const moviesSorted = moviesApi.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
			
			// Initiate a genre list array in order to create the unique genre filter
			let genreList = []

			// Add the genre names to the movieSorted list
			moviesSorted.forEach(function (movie) {
				
				let genreIds = movie.genre_ids;
				
				const genreMatch = genresApi.filter(x => genreIds.includes(Number(x.id)))
				movie.genres = genreMatch;
				
				for (const genre of movie.genres) {
					genreList.push(genre.name);
				}

				movie.visibility = true;

		});	


		// Add the unique genres to the genre filter by creating a unique set and sorting it
		const uniqueGenres = new Set (genreList.sort());
		this.setState({ genresCheckboxes: uniqueGenres})

		// Add the sorted movies with the genre names to the app state
		this.setState({ movies: moviesSorted })

		})).catch(errors => {
			console.log(errors);
		})
	} // componentDidMount

	// Handle the slider changes and update the rating state accordingly
	handleChange =  (event) => {
		this.setState({
		rating: event.currentTarget.value
		});
	}

	

	handleGenreCheckboxes = (event) => {
		if (event.target.checked) {
			// new array if genreIds match genres from api.
		
			const initialState = [...this.state.movies];

			
			const genresFiltered = initialState.filter(movies => movies.genre_ids.includes(parseInt(28)));

			console.log(genresFiltered);
		}
	}
	

	render() {
		return (			
			<>
				<header>
					<h1>Main title</h1>
						<Slider 
							rating={this.state.rating}
							handleChange={this.handleChange}
						/>
						<GenreFilter 
						genres={this.state.genresCheckboxes}
							handleGenreCheckboxes={this.handleGenreCheckboxes}
						/>
				</header>
					<MoviesList
						movies={this.state.movies}
						rating={this.state.rating}
						genres={this.state.genres}
					/>
			</>
		);
	}
}

export default App;