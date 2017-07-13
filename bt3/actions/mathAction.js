import $ from 'jquery';
export const FETCH_STARTED = 'FETCH_STARTED';

export function fetchStarted() {
  return {
    type: FETCH_STARTED,
  }
};

export const FETCH_COMPLETED = 'FETCH_COMPLETED';

export function fetchCompleted() {
  return {
    type: FETCH_COMPLETED
  }
};


export const GETUSER_COMPLETED = 'GET_USER';
export function getUserCompleted() {
  return {
    type: GETUSER_COMPLETED
  }
};


export function addLoading(isLoading) {
	if( !isLoading ) {
		$('.loading').addClass('active');
	} else {
		$('.loading').removeClass('active');
	}
	
}