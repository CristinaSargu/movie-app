import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import classNames from 'classnames';
import {
	setSearchValue,
} from './../actions/search';
import SvgMic from './Svg/SvgMic';

class VoiceSearch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isRecognising: false,
			finalTranscript: '',
		};

		this.recognition = null;

		this.handleVoiceButton = this.handleVoiceButton.bind(this);
		this.recognitionFunc = this.recognitionFunc.bind(this);
		this.recognitionOnStart = this.recognitionOnStart.bind(this);
		this.recognitionOnStart = this.recognitionOnStart.bind(this);
		this.recognitionOnResult = this.recognitionOnResult.bind(this);
		this.recognitionOnEnd = this.recognitionOnEnd.bind(this);

		this.recognitionFunc();
	}

	recognitionFunc() {
		if ('webkitSpeechRecognition' in window) {
		  this.recognition = new window.webkitSpeechRecognition();
		  this.recognition.continuous = true;
		  this.recognition.interimResults = true;

		  this.recognition.onstart = this.recognitionOnStart;
			this.recognition.onend = this.recognitionOnEnd;
			this.recognition.onresult = this.recognitionOnResult;
		}
	}

	recognitionOnStart() {
		this.setState({
			isRecognising: true,
		});
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
		
		this.props.setSearchValue(this.state.finalTranscript);
	}

	recognitionOnEnd() {
		this.setState({
			isRecognising: false,
		});
	}

	capitalize(result) {
	  return result.charAt(0).toUpperCase() + result.slice(1);
	}

	handleVoiceButton() {
		if (this.state.isRecognising) {
			this.recognition.stop();
		} else {
			this.recognition.start();
		}
	}

	render() {
		const buttonClasses = classNames('voice-search__btn g-before', {
			'state-recording': this.state.isRecognising && !this.props.searchValue,
		});

		return (
			<div className="voice-search">
				<div
					className={buttonClasses}
					onClick={this.handleVoiceButton}
				>
					<SvgMic />
				</div>
			</div>
		);
	}	
}

function mapStateToProps(state) {
	return {
		searchValue: state.search.searchValue,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setSearchValue: bindActionCreators(setSearchValue, dispatch),
	}
}

export {VoiceSearch};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VoiceSearch);

