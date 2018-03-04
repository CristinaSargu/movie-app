import {combineReducers} from 'redux';
import pagination from './pagination';
import voiceSearch from './voiceSearch';

const rootReducer = combineReducers({
	pagination,
	voiceSearch,
});

export default rootReducer;