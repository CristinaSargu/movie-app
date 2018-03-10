import {combineReducers} from 'redux';
import pagination from './pagination';
import search from './search';

const rootReducer = combineReducers({
	pagination,
	search,
});

export default rootReducer;