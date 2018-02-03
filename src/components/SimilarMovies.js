import React, { Component } from 'react';
import {Link} from 'react-router';
import '../style.css';

import posterSimilar from './../../public/img/250x141.jpg';

class SimilarMovies extends Component {
	constructor() {
		super();
		this.state = {similar: {}};
	}
	componentWillMount() {
		fetch('https://api.themoviedb.org/3/movie/'  + this.props.id + '/similar?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then((json) => {
		        this.setState({similar: json});
		    });
	}
	render() {
		let similar = this.state.similar;

		if(similar.results){
			similar.results.length = 3;
		}
		return (
			<ul className="similar">
				{similar.results ? similar.results.map( item => 
					<li key={item.title}>
						{item.poster_path ? 
							<img src={"https://image.tmdb.org/t/p/w250_and_h141_bestv2" + item.poster_path} alt="" className="similar__img"/>
							: <img src={posterSimilar} alt="" className="similar__img"/>} 
						
						<Link href={'/movie/' + item.id} className="similar__title">{item.title}</Link>
						<p className="similar__rating">{item.vote_average} &#9733;</p>
					</li>
				) : []}
			</ul>
		)
	}	
}

export default SimilarMovies;
