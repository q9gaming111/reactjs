import $ from 'jquery';
import axios from 'axios';
import * as type from './fetchType';

export const fectUsers = function() {
	let urlAPI = 'http://localhost:3004/contact';
	return (dispatch) => {
		dispatch(type.fetchStart());
		return axios.get(urlAPI)
 		.then(function(data){
 			var returnData = Object.assign(type.fetchComplete(),data: data.data)
 			dispatch(returnData)
 		})
	}
};
