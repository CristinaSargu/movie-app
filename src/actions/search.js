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

export {
	setSearchValue,
	resetSearchValue,
}
