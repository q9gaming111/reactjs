import {createStore, combineReducers} from 'redux';
import math from './reducer/mathReducer';
import users from './reducer/userReducer';
export default createStore(
	combineReducers({
		math: math,
		user: users
}));