import React, {Component} from 'react';
import {Link} from 'react-router';

import MovieItem from './MovieItem';
import FirstScreen from './FirstScreen';
import posterSmall from './../../public/img/185x278.jpg';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			searchResult: ''
		};

		this.handleSearch = this.handleSearch.bind(this);
		this.inputText = this.inputText.bind(this);
	}

	componentWillMount() {
		this.changePage();
	}

	changePage(){
		// fetch('https://api.themoviedb.org/3/movie/popular?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
		// 	.then( response => response.json())
		// 	.then( ({results: items}) => {
		// 		return this.setState({items});
		// 	})
	}

	handleSearch() {
		fetch('https://api.themoviedb.org/3/search/movie?api_key=629599926ec66fe2630d82d78db80df6&language=en-US&query=' + this.state.searchResult + '&page=1&include_adult=false')
			.then( response => response.json())
			.then( ({results: items}) => { 
				return this.setState({items});
			})
	}

	inputText(event) {
		this.setState({
			searchResult: event.target.value,
		});
	}

	renderItem(item) {
		return (
			<li key={item.id} className="movies__item">
				{item.poster_path ? 
					<img src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2" + item.poster_path} alt="" className="movies__item-img"/> 
					: <img src={posterSmall} alt="" className="movies__item-img"/>} 
				<div className="movies__description">
					<h4 className="movies__item-title">{item.title}</h4>
					<span className="movies__item-votes">{item.vote_average} &#9733;</span>
					<MovieItem id={item.id}/>
					<Link to={`/movie/item.id`} className="movies__item-link">View more</Link>
				</div>
			</li>
		);
	}

	render() {
		const {items} = this.state;

		return (
			<div className="seach-section">
				<FirstScreen
					firstScreenTitle="Search for a movie"
					firstScreenSubtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, placeat." />
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="search">
								<input type="text" className="search-field" onChange={this.inputText} placeholder="Enter movie title"/>
								<span className="search-btn" onClick={this.handleSearch}>Search</span>
								<ul className="movies">
									{items.map( item => this.renderItem(item))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}	
}

export default Search;
