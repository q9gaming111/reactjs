import $ from 'jquery';
import axios from 'axios';
import * as actions from './mathAction';

export var fectUsers = function(page) {
	var paging = !!page ? page : 1;
	let urlAPI = 'https://jsonplaceholder.typicode.com/users';
	return (dispatch) => {
		dispatch(actions.fetchStarted());
		axios.get(urlAPI)
 		.then(function(data){
 			var returnData = Object.assign(actions.fetchCompleted(),data: data.data)
 			return dispatch(returnData)
 		})
	}
};
export var fectUserDetail = function(pathName) {
	let urlAPI = 'https://jsonplaceholder.typicode.com' + pathName;
	return (dispatch) => {
		axios.get(urlAPI)
 		.then(function(data){
 			var returnData = Object.assign(actions.getUserCompleted(),data: data.data)
 			return dispatch(returnData)
 		})
	}
}