import React, {Component} from 'react';
import {Link} from 'react-router';

var menuItems = [
	{
		text: 'Home',
		link: '/'
	},
	{
		text: 'Popular',
		link: '/popular'
	},
	{
		text: 'Top rated',
		link: '/top_rated'
	},
	{
		text: 'Upcoming',
		link: '/upcoming'
	},
	{
		text: 'Search',
		link: '/search'
	}
]

class Menu extends Component {
	renderMenuItem(item, index) {
		return (
			<li key={index} className="menu__item">
				<Link to={item.link} className="menu__link">{item.text}</Link>
			</li>
		); 
	}

	render() {
		return (
			<ul className="menu">
				{menuItems.map((item, index) => this.renderMenuItem(item, index))}
			</ul>
		);
	}	
}

export default Menu;
