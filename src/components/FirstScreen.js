import React, { Component } from 'react';
import '../style.css';

class FirstScreen extends Component {
	render() {
		return (
			<div className="first-screen g-before g-after">
				<span className="g-dark"></span>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="title-container">
								<h1 className="main-title">{this.props.firstScreenTitle}</h1>
								<p className="main-subtitle">{this.props.firstScreenSubtitle}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)

	}	
}

export default FirstScreen;
