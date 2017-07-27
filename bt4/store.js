import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import Movies from './reducer/introReducer';

var store = createStore (
	combineReducers({
		Movies
}),applyMiddleware(thunk));

export default store;