import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Pagination from './Pagination';
import MovieCard from './MovieCard';
import {
	nextPage,
	prevPage,
} from './../actions/pagination';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [], 
		};
	}

	componentWillMount() {
		this.fetchPageData(this.props.pageNumber);
	}

	componentWillReceiveProps(nextProps) {
	  const {
	    pageNumber,
	  } = this.props;

	  if (pageNumber !== nextProps.pageNumber) {
	    this.fetchPageData(nextProps.pageNumber);
	  }
	}

	fetchPageData(pageNumber){
		const {category} = this.props;

		fetch('https://api.themoviedb.org/3/movie/'  + category + '?api_key=629599926ec66fe2630d82d78db80df6&language=en-US&page=' + pageNumber)
			.then( response => response.json())
			.then( ({results: items}) => {
				return this.setState({items});
			})
	}
	
	render() {
		const {items} = this.state;
		const {
			pageClass,
			nextPage,
			prevPage,
			pageNumber,
			categoryNumber,
		} = this.props;

		if (!items) {
			return null;
		}

		if(pageClass === "home-page"){
			items.length = 4;
		}

		const number = categoryNumber ? categoryNumber : 0;

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="movies">
							{items.map((item, index) =>
								<MovieCard key={index} number={index + number*4} item={item} />
							)}
						</ul>
						<Pagination 
							currentPageNumber={pageNumber}
							clickNextBtn={nextPage}
							clickPrevBtn={prevPage}
						/>
					</div>
				</div>
			</div>
		);
	}	
}

function mapStateToProps(state) {
	return {
		pageNumber: state.pagination.pageNumber,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		nextPage: bindActionCreators(nextPage, dispatch),
		prevPage: bindActionCreators(prevPage, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieList);
