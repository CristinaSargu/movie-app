import React, { Component } from 'react';
import {Link} from 'react-router';
import '../style.css';

var MENUITEMS = [
	{
		id: 1,
		text: 'Home',
		link: '/'
	},
	{
		id: 2,
		text: 'Popular',
		link: '/popular'
	},
	{
		id: 3,
		text: 'Top rated',
		link: '/top_rated'
	},
	{
		id: 4,
		text: 'Upcoming',
		link: '/upcoming'
	},
	{
		id: 5,
		text: 'Search',
		link: '/search'
	}
]

class Menu extends Component {
	render() {
		return (
			<ul className="menu">
				{
					MENUITEMS.map(function(el) {
						return (
							<li key={el.id} className="menu__item">
								<Link to={el.link} className="menu__link">{el.text}</Link>
							</li>
						)
					})
				}
			</ul>
		)

	}	
}

export default Menu;
