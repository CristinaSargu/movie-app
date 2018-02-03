import React, { Component } from 'react';
import {Link} from 'react-router';

import '../style.css';
import logo from './../../public/img/logo.png'

class Logo extends Component {
	render() {
		return (
			<Link href="/" className="logo">				
				<img className="logo__img" src={logo} alt=""/>
			</Link>
		)

	}	
}

export default Logo;
