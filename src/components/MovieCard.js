import React from 'react';
import './MovieCard.scss';

class MovieCard extends React.Component {
    
    render() {

            return (
							<li className="movie-card">
								
								{/* <img
									className="movie-card__image"
									src="https://via.placeholder.com/500"
									alt={this.props.title}
                                />
                                <h2 className="movie-card__title">Title</h2>
								<ul className="movie-card__genres">
									<li className="movie-card__genre">Lorem</li>
									<li className="movie-card__genre">Ipsum</li>
									<li className="movie-card__genre">Dolor</li>
								</ul> */}

								<img
									className="movie-card__image"
									src={"https://image.tmdb.org/t/p/w500" + this.props.image}
									alt={this.props.title}
								/>
								<div className="movie-card__info">
									<h2 className="movie-card__title">{this.props.title}</h2>
									<ul className="movie-card__genres">{this.props.genres}</ul>
								</div>
							</li>
						);
        }
    
}

export default MovieCard;