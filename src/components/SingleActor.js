import React, {Component} from 'react';

import actorImg from './../../public/img/actor.jpg';
import MovieCard from './MovieCard';

class SingleActor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			person: {},
			cast: {},
			crew: {},
		};
	}

	componentDidMount() {
		this.fetchActorData();
		this.fetchActorCredits();
	}

	fetchActorData() {
		const {id} = this.props;

		fetch('https://api.themoviedb.org/3/person/' + id +'?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then((json) => {
	      this.setState({person: json});
	    });
	}

	fetchActorCredits() {
		const {id} = this.props;

		fetch('https://api.themoviedb.org/3/person/' + id +'/combined_credits?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then((json) => {
				this.setState({
					cast: json.cast,
					crew: json.crew,
				});
	    });
	}

	renderCast() {
		const {cast} = this.state;

		if(cast.length === 0) {
			return null;
		}

		return (
			<ul className="single-actor__movies movies">
				<h4 className="known-for">Known for cast</h4>
				{cast.length > 0 && cast.map((item, index) => <MovieCard key={index} number={index} item={item} />)}
			</ul>
		);
	}

	renderCrew() {
		const {crew} = this.state;
		
		if(crew.length === 0) {
			return null;
		}

		return (
			<ul className="single-actor__movies movies">
				<h4 className="known-for">Known for crew</h4>
				{crew.length > 0 && crew.map((item, index) => <MovieCard key={index} number={index} item={item} />)}
			</ul>
		);
	}

	render() {
		const {person} = this.state;
		const {
			profile_path,
			name,
			biography,
			birthday,
			place_of_birth,
		} = person;
		const poster = profile_path
			? `https://image.tmdb.org/t/p/w185_and_h278_bestv2${profile_path}`
			: actorImg;

		console.log("SingleActor")

		return (
			<section> 
				<div className="single-actor-section">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="single-actor">
									<div className="single-actor__about">
										<img src={poster} alt={name} className="single-actor__img"/>
										<div className="single-actor__info-wrapper">
											<h3 className="single-actor__name">{name}</h3>
											{(birthday || place_of_birth) &&
												<p className="single-actor__gender">Date and place of birth: {birthday}, {place_of_birth}</p>
											}
											<p className="single-actor__biography">{biography}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							{person && this.renderCast()}
							{person && this.renderCrew()}
						</div>
					</div>
				</div>
			</section>
		);
	}	
}


export default SingleActor;
