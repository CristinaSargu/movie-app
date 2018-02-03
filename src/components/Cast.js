import React, { Component } from 'react';
import '../style.css';

import actorImg from './../../public/img/actor.jpg';

class Cast extends Component {
	constructor() {
		super();
		this.state = {cast: {}};
	}
	componentWillMount() {
		fetch('https://api.themoviedb.org/3/movie/'  + this.props.id + '/credits?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then((json) => {
		        this.setState({cast: json});
		    });
	}
	render() {
		let cast = this.state.cast;
		if(cast.cast) {
			cast.cast.length = 6
		};
		return (
			<ul className="cast visible-single">
				{cast.cast ? cast.cast.map( actor => 
					<li key={actor.name} className="cast__elem">
						{actor.profile_path ? 
							<img src={"https://image.tmdb.org/t/p/w132_and_h132_bestv2" + actor.profile_path} alt="" className="cast__img"/>
							: <img src={actorImg} alt="" className="cast__img"/>} 
						<h4 className="cast__title">{actor.name}</h4>
						<p className="cast__character">{actor.character}</p>
					</li>
				) : []}
			</ul>
		)
	}	
}

export default Cast;
