import React from 'react';

const GenreFilter = props => {

    const genre = props.genres.map(genre => {
        return(
            <li key={genre.name}>
                <input 
                    type="checkbox"
                    value={genre.id}
                    onChange={props.handleGenreCheckboxes}
                    id={genre.name}
                />
                <label htmlFor={genre.name}>{genre.name}</label>
            </li>
        )
    });

    return (
        <div className="genre-picker">
            <form>
                <ul>
                    {genre}
                </ul>
            </form>
        </div>
    )
} 

export default GenreFilter;