import React, {Component} from 'react';

import Menu from './Menu';
import Logo from './Logo';

class Header extends Component {
	render() {
		return (
			<div className="header-wrapper">				
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<Logo />
						</div>
						<div className="col-md-9">
							<Menu />
						</div>
					</div>	
				</div>
			</div>
		);
	}
}

export default Header;
