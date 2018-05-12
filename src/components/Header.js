import React, {Component} from 'react';

import Menu from './Menu';
import Logo from './Logo';

class Header extends Component {
	render() {
		return (
			<div className="header-wrapper">		
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-3 col-xs-12">
							<Logo />
						</div>
						<div className="col-md-9 col-sm-9 col-xs-12">
							<Menu />
						</div>
					</div>	
				</div>
			</div>
		);
	}
}

export default Header;
