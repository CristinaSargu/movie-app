import React, {Component} from 'react';

import Logo from './Logo';

class Footer extends Component {
	render() {
		return (
			<div className="footer-wrapper">				
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-3 col-xs-12">
							<Logo />
						</div>
						<div className="col-md-9 col-sm-9 col-xs-12">
							<p className="copyright">@ The Movie App project. All rights reserve.</p>
						</div>
					</div>	
				</div>
			</div>
		);
	}	
}

export default Footer;
