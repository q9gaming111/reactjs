import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import math from './reducer/mathReducer';
import users from './reducer/userReducer';
import * as fetch from './actions/getTotalUser';
import thunk from 'redux-thunk';

var store = createStore (
	combineReducers({
		math: math,
		user: users
}),applyMiddleware(thunk));

export default store;