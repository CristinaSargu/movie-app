import React, {Component} from 'react';
import {Link} from 'react-router';

import logo from './../../public/img/logo.png'

class Logo extends Component {
	render() {
		return (
			<Link href="/" className="logo">
				<img className="logo__img" src={logo} alt="Logo"/>
			</Link>
		);
	}	
}

export default Logo;
