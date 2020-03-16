import React from 'react';
import MovieCard from './MovieCard';
import './MoviesList.scss';

const MoviesList = props => {
		
		// Create a movie list by filtering any movies 
		const movie = props.movies.filter(movie => movie.vote_average > props.rating && movie.visibility === "show").map(movie => {

			const genres = movie.genres;
            const genreList = []

			for (const [index, value] of genres.entries()) {
				genreList.push(
					<li className="movie-card__genre" key={index}>
						{value.name}
					</li>
				);
			}
				
			return (

				<MovieCard 
					key={movie.id} 
					title={movie.title} 
					image={movie.poster_path}
					voteAverage={movie.vote_average}
					genres={genreList}       
				/>

			)
			

		});
		

		return (
			<ul className="movies-list">
				{movie}
			</ul>	
		)


};

export default MoviesList;
