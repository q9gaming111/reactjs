const mathReducer = function( state = { fetched: false, data:[]}, action){
	switch (action.type) {
		case "FETCH_STARTED":
			return { ...state, fetched: false};
			break;
		case "FETCH_COMPLETED":
			return { ...state, fetched: true,data: action.data };
			break;
		case "NEXT_PAGE":
			return { ...state, fetched: true,data: action.data };
			break;
		case "PREV_PAGE":
			return { ...state, fetched: true,data: action.data };
			break;
	}
	return state;
}
export default mathReducer;