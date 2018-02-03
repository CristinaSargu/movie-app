import React, { Component } from 'react';
import '../style.css';

import FirstScreen from './FirstScreen';
import MovieList from './MovieList';

class Section extends Component {
	render() {
		return (
			<section> 
				<FirstScreen 
					firstScreenTitle={this.props.firstScreenTitle}
					firstScreenSubtitle={this.props.firstScreenSubtitle}/> 
					<div className="section">
						<MovieList category={this.props.category}/>
					</div>

			</section>
		)

	}	
}

export default Section;
