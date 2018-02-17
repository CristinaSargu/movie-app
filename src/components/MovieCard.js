import React, {Component} from 'react';
import {Link} from 'react-router';

// import MovieItem from './MovieItem';
// import Pagination from './Pagination';

import posterSmall from './../../public/img/185x278.jpg';

class MovieCard extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		items: [], 
	// 		page: 1,
	// 	};

	// 	this.increase = this.increase.bind(this);
	// 	this.descrease = this.descrease.bind(this);
	// }

	// increase(){
	// 	if(this.state.page + 1 > 0){
	// 		this.setState({
	// 			page: this.state.page + 1
	// 		});

	// 		this.changePage(this.state.page + 1);
	// 	}
	// }

	// descrease(){
	// 	if(this.state.page - 1 > 0){
	// 		this.setState({
	// 			page: this.state.page - 1
	// 		});

	// 		this.changePage(this.state.page - 1);
	// 	}
	// }

	// componentWillMount() {
	// 	this.changePage(this.state.page);
	// }

	// changePage(page){
	// 	const {category} = this.props;

	// 	fetch('https://api.themoviedb.org/3/movie/'  + category + '?api_key=629599926ec66fe2630d82d78db80df6&language=en-US&page=' + page)
	// 		.then( response => response.json())
	// 		.then( ({results: items}) => {
	// 			return this.setState({items});
	// 		})
	// }

	// renderMovieItem(item) {
	// 	console.log(item)
	// 	return (
	// 		<li key={item.id} className="movies__item">
	// 			{item.poster_path
	// 				? <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.poster_path}`} alt={item.title} className="movies__item-img"/> 
	// 				: <img src={posterSmall} alt="" className="movies__item-img"/>
	// 			}
	// 			<div className="movies__description">
	// 				<h4 className="movies__item-title">{item.title}</h4>
	// 				<span className="movies__item-votes">{item.vote_average} &#9733;</span>
	// 				<p className="movies__item-overview">{item.overview}</p>
	// 				<Link to={'/movie/' + item.id} className="movies__item-link">View more</Link>
	// 			</div>
	// 		</li>
	// 	);
	// }
	
	render() {
		// const {items} = this.state;
		// const {pageClass} = this.props;

		// if(pageClass === "home-page"){
		// 	items.length = 4;
		// }
		const {
			id,
			poster_path,
			title,
			vote_average,
			overview,
		} = this.props.item;

		return (
			<li key={id} className="movie-card">
				{poster_path
					? <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`} alt={title} className="movie-card__img" /> 
					: <img src={posterSmall} alt="" className="movie-card__img"/>
				}
				<div className="movies__description">
					<h4 className="movie-card__title">{title}</h4>
					<span className="movie-card__votes">{vote_average} &#9733;</span>
					<p className="movie-card__overview">{overview}</p>
					<Link to={`/movie/${id}`} className="movie-card__link">View more</Link>
				</div>
			</li>
		);
	}	
}

export default MovieCard;
