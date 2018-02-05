import React, {Component} from 'react';

import classNames from 'classnames';
import Cast from './Cast';
import posterLarge from './../../public/img/300x450.jpg';

class MovieItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movie: {},
		};
	}

	componentWillMount() {
		this.fetchMovieData();
	}

	fetchMovieData() {
		const {id} = this.props;

		fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then((json) => {
	       this.setState({movie: json});
	    });
	}

	renderGenres(genres) {
		return <li key={genres.name}>{genres.name}</li>;
	}

	render() {
		const {movie} = this.state;
		const {id, pageClass} = this.props;
		const itemClassNames = classNames('movie-item', pageClass)

		return (
			<div className={itemClassNames}>
				<div className="movie-item__parts visible-single">
					{movie.poster_path ? 
						<img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt={movie.title} className="movies-item__img"/>
						: <img src={posterLarge} alt="" className="movies-item__img"/>} 
				</div>
				<div className="movie-item__parts movie-item__parts--pd">
					<h3 className="movie-item__title visible-single">{movie.title}</h3>
					<ul className="movie-item__genres visible-single">
						{movie.genres && movie.genres.map( genres => this.renderGenres(genres))}
					</ul>
					<p className="visible-single movie-item__rating">{movie.vote_average} &#9733;</p>
					<p className="visible-single movie-item__features">Budget: {movie.budget}</p>
					<p className="visible-single movie-item__features">Status: {movie.status}</p>
					<p className="movie-item__overview">{movie.overview}</p>
				</div>
				<Cast id={id} />
			</div>
		);
	}	
}

export default MovieItem;
