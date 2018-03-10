import React, {Component} from 'react';

import classNames from 'classnames';
import Cast from './Cast';
import posterLarge from './../../public/img/300x450.jpg';

class SingleMovie extends Component {
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

	renderBudget() {
		const {movie} = this.state;
		const {budget} = movie;

		if (!budget) {
			return;
		}

		return budget.toLocaleString();
	}

	renderGenres(genres) {
		return <li key={genres.name}>{genres.name}</li>;
	}

	render() {
		const {id, pageClass} = this.props;
		const {movie} = this.state;
		const {
			poster_path,
			title,
			genres,
			vote_average,
			status,
			overview,
		} = movie;
		const itemClassNames = classNames('single-movie', pageClass);
		const poster = poster_path
			? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`
			: posterLarge;

		return (
			<div className={itemClassNames}>
				<div className="single-movie__about">
					<img src={poster} alt={title} className="single-movie__img"/>
					<div className="single-movie__info-wrapper">
						<h3 className="single-movie__title">{title}</h3>
						<ul className="single-movie__genres">
							{genres && genres.map( genres => this.renderGenres(genres))}
						</ul>
						<p className="single-movie__rating">{vote_average} &#9733;</p>
						<p className="single-movie__features">Budget: ${this.renderBudget()}</p>
						<p className="single-movie__features">Status: {status}</p>
						<p className="single-movie__overview">{overview}</p>
					</div>
				</div>
				<Cast id={id} />
			</div>
		);
	}	
}


export default SingleMovie;
