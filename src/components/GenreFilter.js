import React from 'react';

const GenreFilter = props => {
    const genreSelection = props.genres;
    const checkboxes = [];

    for (const [index, value] of genreSelection.entries()) {
        checkboxes.push(
            <li key={index}>
                <input
                    type="checkbox"
                    value={value}
                    id={value}
                    onChange={props.handleGenreCheckboxes}
                />
                <label htmlFor={value}>{value}</label>
            </li>
        )
    };

    return (
        <div className="genre-picker">
            <form>
                <ul>
                    {checkboxes}
                </ul>
            </form>
        </div>
    )
}

export default GenreFilter;