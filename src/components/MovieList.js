import React, {Component} from 'react';

import Pagination from './Pagination';
import MovieCard from './MovieCard';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [], 
			page: 1,
		};

		this.increase = this.increase.bind(this);
		this.descrease = this.descrease.bind(this);
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
		const {category} = this.props;

		fetch('https://api.themoviedb.org/3/movie/'  + category + '?api_key=629599926ec66fe2630d82d78db80df6&language=en-US&page=' + page)
			.then( response => response.json())
			.then( ({results: items}) => {
				return this.setState({items});
			})
	}
	
	render() {
		const {items} = this.state;
		const {pageClass} = this.props;

		if(pageClass === "home-page"){
			items.length = 4;
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="movies">
							{items.map((item, index) =>
								<MovieCard key={index} item={item} />
							)}
						</ul>
						<Pagination 
							clickNextBtn={this.increase}
							clickPrevBtn={this.descrease}
						/>
					</div>
				</div>
			</div>
		);
	}	
}

export default MovieList;
