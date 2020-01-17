import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = props => {

    const movies = props.movies.map(movie => {
        return <MovieCard key={movie.id} title={movie.title} image={movie.poster_path} />
    });
    return <ul className="movies-list">{movies}</ul>;
};

export default MoviesList;

