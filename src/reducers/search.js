const initialState = {
	searchValue: '',
};

function search(state = initialState, action) {
	switch (action.type) {
	case 'SET_SEARCH_VALUE':
		return Object.assign({}, state, {
			searchValue: action.payload,
		});
	case 'RESET_SEARCH_VALUE':
		return Object.assign({}, state, {
			searchValue: initialState.searchValue,
		});
	default:
		return state;
	}
}

export default search;