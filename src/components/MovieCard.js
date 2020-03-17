import React from 'react';
import './MovieCard.scss';

class MovieCard extends React.Component {
    
    render() {

            return (
							<li className="movie-card">
								<img
									className="movie-card__image"
									src={"https://image.tmdb.org/t/p/w500" + this.props.image}
									alt={this.props.title}
								/>
								<div className="movie-card__info">
									<h2 className="movie-card__title">{this.props.title.toUpperCase()}</h2>
									<ul className="movie-card__genres">{this.props.genres}</ul>
								</div>
							</li>
						);
        }
    
}

export default MovieCard;