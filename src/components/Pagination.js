import React, {Component} from 'react';

class Pagination extends Component {
	constructor(props) {
		super(props);

		this.handleNextBtnClick = this.handleNextBtnClick.bind(this);
		this.handlePrevBtnClick = this.handlePrevBtnClick.bind(this);
	}
	
	handleNextBtnClick() {
		this.props.clickNextBtn();
		return window.scrollTo(0, 0);
	}

	handlePrevBtnClick() {
		this.props.clickPrevBtn();
		return window.scrollTo(0, 0);
	}

	render() {
		return (
			<ul className="pagination">
				<li
					className='pagination__item pagination__item--prev'
					onClick={this.handlePrevBtnClick}>&#60;
				</li>
				<li
					className="pagination__item pagination__item--next"
					onClick={this.handleNextBtnClick}>&#62;
				</li>
			</ul>
		);
	}	
}

export default Pagination;
