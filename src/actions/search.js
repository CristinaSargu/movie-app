function setSearchValue(payload) {
	return {
		type: 'SET_SEARCH_VALUE',
		payload,
	}
}

function resetSearchValue() {
	return {
		type: 'RESET_SEARCH_VALUE',
	}
}

function setVoiceNav(payload) {
	return {
		type: 'SET_VOICE_NAV',
		payload,
	}
}

function setVoiceSearch(payload) {
	return {
		type: 'SET_VOICE_SEARCH',
		payload,
	}
}

export {
	setSearchValue,
	resetSearchValue,
	setVoiceNav,
	setVoiceSearch,
}
