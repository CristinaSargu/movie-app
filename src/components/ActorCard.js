import React, {Component} from 'react';
import {Link} from 'react-router';

import actorImg from './../../public/img/actor.jpg';

class ActorCard extends Component {
	renderKnownFor() {
		const {known_for} = this.props.item;

		if(known_for.length > 4) {
			known_for.length = 4;
		}

		return (
			<ul className="actor-card__movies">
				{known_for.map((item, index) => 
					<li className="actor-card__movie-title" key={index}>
						&#9733; {item.title ? item.title : item.name}
					</li>
				)}
			</ul>
		);
	}

	render() {
		const {
			id,
			profile_path,
			name,
			media_type,
		} = this.props.item;
		const image = profile_path
			? `https://image.tmdb.org/t/p/w185_and_h278_bestv2${profile_path}`
			: actorImg;

		console.log("Actor")

		return (
			<li key={id} className="actor-card" data-number={this.props.number} data-id={id} data-type={media_type}>
				<span className="actor-card__number">{this.props.number}</span>
				<div className="actor-card__img-wrapper">
					<img src={image} alt={name} className="actor-card__img" />
				</div>
				<div className="actor-card__description">
					<h4 className="actor-card__name">{name}</h4>
					<p className="actor-card__known-title">Known for:</p>
					{this.renderKnownFor()}
					<Link to={`/actor/${id}`} className="actor-card__link">View more</Link>
				</div>
			</li>
		);
	}	
}

export default ActorCard;
