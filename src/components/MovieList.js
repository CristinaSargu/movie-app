import React, { Component } from 'react';
import {Link} from 'react-router';
import '../style.css';

import MovieItem from './MovieItem';
import Pagination from './Pagination';

import posterSmall from './../../public/img/185x278.jpg';

class MovieList extends Component {
	constructor() {
		super();
		this.state = {
			items: [], 
			page: 1
		};
	}
	increase(){
		if(this.state.page + 1 > 0){
			this.setState({
				page: this.state.page + 1
			});
			this.changePage(this.state.page + 1);
		}
	}
	descrease(){
		if(this.state.page - 1 > 0){
			this.setState({
				page: this.state.page - 1
			});
			this.changePage(this.state.page - 1);
		}
	}
	componentWillMount() {
		this.changePage(this.state.page);
	}

	changePage(page){
		fetch('https://api.themoviedb.org/3/movie/'  + this.props.category + '?api_key=629599926ec66fe2630d82d78db80df6&language=en-US&page=' + page)
			.then( response => response.json())
			.then( ({results: items}) => {
				return this.setState({items});
		})
	}
	
	render() {
		let items = this.state.items;
		if(this.props.pageClass === "home-page"){
			items.length =4;
		}		
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="movies">
							{items.map( item => 
								<li key={item.id} className="movies__item">
									{item.poster_path ? 
										<img src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + item.poster_path} alt="" className="movies__item-img"/> 
										: <img src={posterSmall} alt="" className="movies__item-img"/>}
									<div className="movies__description">
										<h4 className="movies__item-title">{item.title}</h4>
										<span className="movies__item-votes">{item.vote_average} &#9733;</span>
										<MovieItem id={item.id}/>
										<Link to={'/movie/' + item.id} className="movies__item-link">View more</Link>
									</div>
								</li>
							)}
						</ul>
						<Pagination 
							clickNextBtn={this.increase.bind(this)}
							clickPrevBtn={this.descrease.bind(this)}/>
					</div>
				</div>
			</div>
		)

	}	
}

export default MovieList;
