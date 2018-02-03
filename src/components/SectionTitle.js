import React, { Component } from 'react';
import '../style.css';

class SectionTitle extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="section-title">{this.props.title}</h3>
						<p className="section-subtitle">{this.props.subtitle}</p>
					</div>
				</div>
			</div>
		)

	}	
}

export default SectionTitle;
