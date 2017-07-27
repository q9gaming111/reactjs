const Intro = function( state = { fetched: false, data:[], totalPage: 0}, action){
	switch (action.type) {
		case "FETCH_STARTED":
			return { ...state, fetched: false};
			break;
		case "FETCH_COMPLETED":
			return { ...state, fetched: true,data: state.data.concat(action.results), totalPage: action.page };
			break;
	}
	return state;
}
export default Intro;