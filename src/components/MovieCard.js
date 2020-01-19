import React from 'react';

class MovieCard extends React.Component {

    render() {
        return(
            <li>
                <h2>{this.props.title}</h2>
                <img src={"https://image.tmdb.org/t/p/w500" + this.props.image} alt={this.props.title} />
                <p>{this.props.genres}</p>
            </li>
        )
    }
}

export default MovieCard;