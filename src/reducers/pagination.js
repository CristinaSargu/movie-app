const initialState = {
	pageNumber: 1,
};

function pagination(state = initialState, action) {
	switch (action.type) {
	case 'NEXT_PAGE':
		return Object.assign({}, state, {
			pageNumber: state.pageNumber + 1,
		});
	case 'PREV_PAGE':
		return Object.assign({}, state, {
			pageNumber: state.pageNumber - 1,
		});
	default:
		return state;
	}
}

export default pagination;