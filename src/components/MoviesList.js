import React from 'react';
import MovieCard from './MovieCard';


const MoviesList = props => {

        const movie = props.movies.map(movie => {

                return (

                <MovieCard 
                    key={movie.id} 
                    title={movie.title} 
                    image={movie.poster_path}
                    voteAverage={movie.vote_average}
                />

                )

        });
return <ul className="movies-list">{movie}</ul>;
};

export default MoviesList;
