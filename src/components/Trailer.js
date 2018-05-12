import React, {Component} from 'react';

class Trailer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			trailers: {},
		};
	}

	componentWillMount() {
		this.fetchMovieData();
	}

	fetchMovieData() {
		const {id} = this.props;

		fetch('https://api.themoviedb.org/3/movie/'  + id + '/videos?api_key=629599926ec66fe2630d82d78db80df6&language=en-US')
			.then( response => response.json())
			.then((json) => {
				this.setState({trailers: json});
	    });
	}

	render() {
		const {trailers} = this.state;
		const youtubeKey = trailers.results && trailers.results[0].key;

		return (
			<div className="trailer">
				{youtubeKey && <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + youtubeKey}></iframe>}
			</div>
		);
	}	
}

export default Trailer;
