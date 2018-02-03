import React, { Component } from 'react';
import {Link} from 'react-router';
import '../style.css';

import FirstScreen from './FirstScreen';
import SectionTitle from './SectionTitle';
import MovieList from './MovieList';

class SectionHome extends Component {
	render() {
		return (
			<section> 
				<FirstScreen 
					firstScreenTitle={this.props.firstScreenTitle}
					firstScreenSubtitle={this.props.firstScreenSubtitle}/> 
					<div className="section">
						<SectionTitle 
							title="The most popular" 
							subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo molestiae consequuntur quo enim at rem excepturi, dolores iusto eligendi ut."/> 
						<MovieList 
							pageClass={this.props.pageClass}
							category="popular"/>
						<Link to="/popular" className="more-movies">View more</Link>
					</div>
					<div className="section">
						<SectionTitle 
							title="Top rated movies" 
							subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo molestiae consequuntur quo enim at rem excepturi, dolores iusto eligendi ut."/> 
						<MovieList 
							pageClass={this.props.pageClass}
							category="top_rated"/>
						<Link to="/top_rated" className="more-movies">View more</Link>
					</div>
					<div className="section">
						<SectionTitle 
							title="Upcoming movies" 
							subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo molestiae consequuntur quo enim at rem excepturi, dolores iusto eligendi ut."/> 
						<MovieList 
							pageClass={this.props.pageClass}
							category="upcoming"/>
						<Link to="/upcoming" className="more-movies">View more</Link>
					</div>
			</section>
		)

	}	
}

export default SectionHome;
