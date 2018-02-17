import React, {Component} from 'react';

import MovieCard from './MovieCard';
import FirstScreen from './FirstScreen';

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
		this.renderPopular();
	}

	renderPopular(){
		fetch('https://api.themoviedb.org/3/movie/popular?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then( ({results: items}) => {
				return this.setState({items});
			})
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
									{items.map((item, index) =>
										<MovieCard key={index} item={item} />
									)}
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
