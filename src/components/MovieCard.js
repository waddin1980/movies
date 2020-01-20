import React from 'react';

class MovieCard extends React.Component {

    render() {
        if (this.props.voteAverage > 1) {
            return(
                    <li>
                        <h2>{this.props.title}</h2>
                        <img src={"https://image.tmdb.org/t/p/w500" + this.props.image} alt={this.props.title} />
                        <p>{this.props.genres}</p>
                    </li> 
            )
        } else {
            return null
        }
    }
}

export default MovieCard;