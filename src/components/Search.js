import React, {Component} from 'react';
import {connect} from 'react-redux';

import MovieCard from './MovieCard';
import FirstScreen from './FirstScreen';
import VoiceSearch from './VoiceSearch';

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
		this.fetchPopular();
	}

	fetchPopular(){
		fetch('https://api.themoviedb.org/3/movie/popular?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then( ({results: items}) => {
				return this.setState({items});
			})
	}

	renderPopular() {
		const {items} = this.state;

		return (
			<ul className="movies">
				{items.map((item, index) =>
					<MovieCard key={index} item={item} />
				)}
			</ul>
		);
	}

	handleSearch() {
		fetch('https://api.themoviedb.org/3/search/movie?api_key=629599926ec66fe2630d82d78db80df6&language=en-US&query=' + this.input.value + '&page=1&include_adult=false')
			.then( response => response.json())
			.then( ({results: items}) => { 
				return this.setState({items});
			})
	}

	inputText(event) {
		this.setState({
			searchResult: event.target ? event.target.value : this.props.voiceSearchResult,
		});
	}

	render() {
		const isVoiceRecognition = this.props.voiceSearchResult && this.props.voiceSearchResult;

		return (
			<div className="seach-section">
				<FirstScreen
					firstScreenTitle="Search for a movie"
					firstScreenSubtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, placeat." />
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="search">
								<input
									ref={(ref) => {this.input = ref}}
									type="text"
									className="search-field"
									onChange={this.inputText}
									value={isVoiceRecognition ? isVoiceRecognition : this.state.searchResult}
									placeholder="Enter movie title"/>
								<span className="search-btn" onClick={this.handleSearch}>Search</span>
							</div>
						</div>
						<div className="col-md-4">
							<VoiceSearch />
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							{this.renderPopular()}
						</div>
					</div>
				</div>
			</div>
		);
	}	
}

function mapStateToProps(state) {
	return {
		voiceSearchResult: state.voiceSearch.voiceSearchResult,
	}
}

export {Search};

export default connect(
	mapStateToProps
)(Search);
