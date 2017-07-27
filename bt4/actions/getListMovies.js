import $ from 'jquery';
import * as type from './fetchType';

export const getMovies= function(page) {
	let Paging = page ? page : 1
	let urlAPI = 'https://api.themoviedb.org/3/discover/movie?api_key=cfe422613b250f702980a3bbf9e90716&language=en-US&sort_by=popularity.desc&page=' + Paging;
	return (dispatch) => {
		dispatch(type.fetchStart())
		return $.ajax ({
			method: 'GET',
			url: urlAPI,
			contentType: 'application/json',
			success: function(data) {
				var returnData = Object.assign(type.fetchComplete(), data);
	 			dispatch(returnData);
			}
		})
	}
};

export const getMovieDetail= function(id) {
	let urlAPI = 'https://api.themoviedb.org/3' + id +'?api_key=cfe422613b250f702980a3bbf9e90716&language=en-US';
	let Data = new Object();
	return (dispatch) => {
		return $.ajax ({
			method: 'GET',
			url: urlAPI,
			contentType: 'application/json',
			success: function(data) {
				Data.results = data;
				var returnData = Object.assign(type.fetchComplete(), Data);
	 			dispatch(returnData);
			}
		})
	}
};
