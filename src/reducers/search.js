const initialState = {
	searchValue: '',
	isVoiceNav: true,
	isVoiceSearch: false,
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
	case 'SET_VOICE_NAV':
		return Object.assign({}, state, {
			isVoiceNav: action.payload,
		});
	case 'SET_VOICE_SEARCH':
		return Object.assign({}, state, {
			isVoiceSearch: action.payload,
		});
	default:
		return state;
	}
}

export default search;