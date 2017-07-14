const Intro = function( state = { fetched: false, data:[]}, action){
	switch (action.type) {
		case "FETCH_STARTED":
			return { ...state, fetched: false};
			break;
		case "FETCH_COMPLETED":
			return { ...state, fetched: true,data: action.data };
			break;
	}
	return state;
}
export default Intro;