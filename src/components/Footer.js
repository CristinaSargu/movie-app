import React, { Component } from 'react';
import '../style.css';

import Logo from './Logo';

class Footer extends Component {
	render() {
		return (
			<div className="footer-wrapper">				
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<Logo />
						</div>
						<div className="col-md-9">
							<p className="copyright">@ The Movie DB API project. All rights reserve.</p>
						</div>
					</div>	
				</div>
			</div>
		)

	}	
}

export default Footer;
