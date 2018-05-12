import React, {Component} from 'react';
import {Link} from 'react-router';

import posterSmall from './../../public/img/185x278.jpg';

class MovieCard extends Component {
	render() {
		const {
			id,
			poster_path,
			title,
			name,
			vote_average,
			overview,
			media_type,
		} = this.props.item;
		const contentType = media_type ? media_type : 'movie';
		const poster = poster_path
			? `https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`
			: posterSmall;

		return (
			<li key={id} className="movie-card" data-number={this.props.number} data-id={id}>
				<span className="movie-card__number">{this.props.number}</span>
				<img src={poster} alt={title} className="movie-card__img" /> 
				<div className="movie-card__description">
					<h4 className="movie-card__title">{title ? title : name}</h4>
					<span className="movie-card__votes">{vote_average} &#9733;</span>
					<p className="movie-card__overview">{overview}</p>
					<Link to={`/${contentType}/${id}`} className="movie-card__link">View more</Link>
				</div>
			</li>
		);
	}	
}

export default MovieCard;
