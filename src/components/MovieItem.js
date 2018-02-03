import React, { Component } from 'react';
import '../style.css';

import Cast from './Cast';

import posterLarge from './../../public/img/300x450.jpg';

class MovieItem extends Component {
	constructor() {
		super();
		this.state = {movie: {}};
	}
	componentWillMount() {
		fetch('https://api.themoviedb.org/3/movie/'  + this.props.id + '?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then((json) => {
		        this.setState({movie: json});
		    });
	}
	render() {
		let movie = this.state.movie;
		return (
			<div className={'movie-item ' + this.props.pageClass}>
				<div className="movie-item__parts visible-single">
					{movie.poster_path ? 
						<img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movie.poster_path} alt="" className="movies-item__img"/>
						: <img src={posterLarge} alt="" className="movies-item__img"/>} 
				</div>
				<div className="movie-item__parts movie-item__parts--pd">
					<h3 className="movie-item__title visible-single">{movie.title}</h3>
					<ul className="movie-item__genres visible-single">
						{movie.genres ? movie.genres.map( item => 
							<li key={item.name}>{item.name}</li>
						) : []}
					</ul>
					<p className="visible-single movie-item__rating">{movie.vote_average} &#9733;</p>
					<p className="visible-single movie-item__features">Budget: {movie.budget}</p>
					<p className="visible-single movie-item__features">Status: {movie.status}</p>
					<p className="movie-item__overview">{movie.overview}</p>
				</div>
				<Cast id={this.props.id} />
			</div>
		)
	}	
}

export default MovieItem;
