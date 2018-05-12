import React, {Component} from 'react';
import {browserHistory} from 'react-router'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
	setVoiceNav,
	setVoiceSearch,
} from './../actions/search';

class VoiceNav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isRecognising: true,
			finalTranscript: '',
		};

		this.recognition = null;

		this.recognitionFunc = this.recognitionFunc.bind(this);
		this.recognitionOnStart = this.recognitionOnStart.bind(this);
		this.recognitionOnStart = this.recognitionOnStart.bind(this);
		this.recognitionOnResult = this.recognitionOnResult.bind(this);
		this.recognitionOnEnd = this.recognitionOnEnd.bind(this);

		this.recognitionFunc();
	}

	componentDidMount() {
		this.recognition.start();
	}

	componentWillUnmount() {
		this.recognition.stop();
	}

	componentWillReceiveProps(nexProps) {
		if (nexProps.isVoiceNav && nexProps.isVoiceNav !== this.props.isVoiceNav) {
			this.recognition.start();
		} else {
			this.recognition.stop();
		}
	}

	recognitionFunc() {
		if ('webkitSpeechRecognition' in window) {
		  this.recognition = new window.webkitSpeechRecognition();
		  this.recognition.continuous = false; //set to false
		  this.recognition.interimResults = false; //set to false

		  this.recognition.onstart = this.recognitionOnStart;
			this.recognition.onend = this.recognitionOnEnd;
			this.recognition.onresult = this.recognitionOnResult;
		}
	}

	recognitionOnStart() {
		console.log("Start")
	}

	recognitionOnResult() {
		let transcription = '';

		for (let i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				transcription += event.results[i][0].transcript;
			}
		}

		this.setState({
			finalTranscript: this.capitalize(transcription),
		});

		console.log("recognitionOnResult", this.state.finalTranscript)

		if (this.props.location === '/search' && this.state.finalTranscript === 'Search for') {
			this.recognition.stop();
		}
		this.changeRoute(this.state.finalTranscript);

		if (!isNaN(this.state.finalTranscript)) {
			this.openMovie(this.state.finalTranscript);
		}
	}

	recognitionOnEnd() {
		console.log("End")
		if (this.props.location === '/search' && this.state.finalTranscript === 'Search for') {
			this.setState({
				finalTranscript: '',
			});

			this.props.setVoiceNav(false)
			this.props.setVoiceSearch(true);
		} else {
			if (this.props.isVoiceNav) {
				this.recognition.start();
			}
		}
	}

	openMovie(number) {
		const item = document.querySelector(`li[data-number="${number}"]`);
		if (item.dataset.type === 'person') {
			browserHistory.push(`/actor/${item.dataset.id}`);
		} else {
			browserHistory.push(`/movie/${item.dataset.id}`);
		}
	}

	changeRoute(output) {
		switch(output) {
		case 'Home':
			browserHistory.push('/');
			break;
		case 'Popular':
			browserHistory.push('/popular');
			break;
		case 'Top rated':
			browserHistory.push('/top_rated');
			break;
		case 'Upcoming':
			browserHistory.push('/upcoming');
			break;
		case 'Search':
		case 'Search for':
			browserHistory.push('/search');
			break;
		case 'Move down':
			window.scrollBy(0, 500);
			break;
		case 'Move up':
			window.scrollBy(0, -500);
			break;
		default:
			return;
		}
	}

	capitalize(result) {
	  return result.charAt(0).toUpperCase() + result.slice(1);
	}

	render() {
		return (
			<div className="voice-nav">
			</div>
		);
	}	
}

function mapStateToProps(state) {
	return {
		isVoiceNav: state.search.isVoiceNav,
		isVoiceSearch: state.search.isVoiceSearch,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setVoiceNav: bindActionCreators(setVoiceNav, dispatch),
		setVoiceSearch: bindActionCreators(setVoiceSearch, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VoiceNav);
