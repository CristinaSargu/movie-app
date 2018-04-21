import React, {Component} from 'react';

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
							<p className="copyright">@ The Movie App project. All rights reserve.</p>
						</div>
					</div>	
				</div>
			</div>
		);
	}	
}

export default Footer;
