const initialState = {
	voiceSearchResult: '',
};

function voiceSearch(state = initialState, action) {
	switch (action.type) {
	case 'SET_VOICE_SEARCH_RESULT':
		return Object.assign({}, state, {
			voiceSearchResult: action.payload,
		});
	default:
		return state;
	}
}

export default voiceSearch;