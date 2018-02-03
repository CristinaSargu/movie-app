import React, { Component } from 'react';

import '../style.css';

class Pagination extends Component {
	render() {
		return (
			<ul className="pagination">
				<li className='pagination__item pagination__item--prev'
					onClick={this.props.clickPrevBtn}>&#60;
				</li>
				<li className="pagination__item pagination__item--next"
					onClick={this.props.clickNextBtn}>&#62;
				</li>
			</ul>
		)
	}	
}

export default Pagination;
