import React, {Component} from 'react';
import {Link} from 'react-router';

import posterSimilar from './../../public/img/250x141.jpg';

class SimilarMovies extends Component {
	constructor(props) {
		super(props);

		this.state = {
			similar: {},
		};
	}

	componentWillMount() {
		this.fetchMovieData();
	}

	fetchMovieData() {
		const {id, type} = this.props;

		fetch('https://api.themoviedb.org/3/' + type + '/'  + id + '/similar?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then((json) => {
				this.setState({similar: json});
	    });
	}

	renderSimilarMovie(item) {
		const {type} = this.props;
		return (
			<li key={item.id}>
				{item.poster_path ? 
					<img src={"https://image.tmdb.org/t/p/w250_and_h141_bestv2" + item.poster_path} alt="" className="similar__img"/>
					: <img src={posterSimilar} alt="" className="similar__img"/>} 
				
				<Link href={`/${type}/${item.id}`} className="similar__title">{item.title ? item.title: item.name}</Link>
				<p className="similar__rating">{item.vote_average} &#9733;</p>
			</li>
		);
	}

	render() {
		const {similar} = this.state;

		if(similar.results){
			similar.results.length = 3;
		}
		return (
			<ul className="similar">
				{similar.results && similar.results.map( item => this.renderSimilarMovie(item))}
			</ul>
		);
	}	
}

export default SimilarMovies;
