import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import introReducer from './reducer/introReducer';

var store = createStore (
	combineReducers({
		introReducer
}),applyMiddleware(thunk));

export default store;