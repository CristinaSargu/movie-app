import React, { Component } from 'react';
import '../style.css';

class Trailer extends Component {
	constructor() {
		super();
		this.state = {trailers: {}};
	}
	componentWillMount() {
		fetch('https://api.themoviedb.org/3/movie/'  + this.props.id + '/videos?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then((json) => {
		        this.setState({trailers: json});
		    });
	}
	render() {
		let trailers = this.state.trailers;
		let youtubeKey;
		if(trailers.results){
			youtubeKey = trailers.results[0].key;
		}
		return (
			<div className="trailer">
				{youtubeKey ? <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + youtubeKey}></iframe>
				: <h5 className="no-results">Sorry, there are no results about trailer</h5>}
			</div>
		)
	}	
}

export default Trailer;