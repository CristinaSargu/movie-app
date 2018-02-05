import React, {Component} from 'react';

class SectionTitle extends Component {
	render() {
		const {
			title,
			subtitle,
		} = this.props;

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="section-title">{title}</h3>
						<p className="section-subtitle">{subtitle}</p>
					</div>
				</div>
			</div>
		);
	}	
}

export default SectionTitle;
