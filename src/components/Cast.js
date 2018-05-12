import React, {Component} from 'react';
import {Link} from 'react-router';

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
		const {id, type} = this.props;

		fetch('https://api.themoviedb.org/3/' + type + '/'  + id + '/credits?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then((json) => {
	      this.setState({cast: json});
	    });
	}

	renderActor(actor) {
		const {
			name,
			profile_path,
			character,
			id,
		} = actor;
		const actorAvatar = profile_path
			? `https://image.tmdb.org/t/p/w132_and_h132_bestv2${profile_path}`
			: actorImg;

		return (
			<Link to={`/actor/${id}`}  key={name} className="cast__elem">
				<img src={actorAvatar} alt={name} className="cast__img"/>
				<h4 className="cast__name">{name}</h4>
				<p className="cast__character">{character}</p>
			</Link>
		);
	}

	render() {
		const {cast} = this.state.cast;

		if (cast) {
			cast.length = 6;
		};

		return (
			<ul className="cast">
				{cast && cast.map( actor => 
					this.renderActor(actor)
				)}
			</ul>
		);
	}	
}

export default Cast;
