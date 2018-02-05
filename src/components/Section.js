import React, {Component} from 'react';

import FirstScreen from './FirstScreen';
import MovieList from './MovieList';

class Section extends Component {
	render() {
		const {
			firstScreenTitle,
			firstScreenSubtitle,
			category,
		} = this.props;
		return (
			<section> 
				<FirstScreen 
					firstScreenTitle={firstScreenTitle}
					firstScreenSubtitle={firstScreenSubtitle}/> 
					<div className="section">
						<MovieList category={category}/>
					</div>
			</section>
		);
	}
}

export default Section;
