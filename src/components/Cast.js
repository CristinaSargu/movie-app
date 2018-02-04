import React, {Component} from 'react';

import actorImg from './../../public/img/actor.jpg';

class Cast extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cast: {},
		};
	}

	componentWillMount() {
		this.fetchCastData();
	}

	fetchCastData() {
		const {id} = this.props;

		fetch('https://api.themoviedb.org/3/movie/'  + id + '/credits?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then((json) => {
	      this.setState({cast: json});
	    });
	}

	renderActor(actor) {
		return (
			<li key={actor.name} className="cast__elem">
				{
					actor.profile_path ?
					<img src={`https://image.tmdb.org/t/p/w132_and_h132_bestv2${actor.profile_path}`} alt={actor.name} className="cast__img"/>
					: <img src={actorImg} alt="" className="cast__img"/>
				} 
				<h4 className="cast__title">{actor.name}</h4>
				<p className="cast__character">{actor.character}</p>
			</li>
		);
	}

	render() {
		const {cast} = this.state.cast;

		if (cast) {
			cast.length = 6;
		};

		return (
			<ul className="cast visible-single">
				{cast && cast.map( actor => 
					this.renderActor(actor)
				)}
			</ul>
		);
	}	
}

export default Cast;
