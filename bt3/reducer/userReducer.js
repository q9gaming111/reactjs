var userReducer = function( state = {fecthed: false, data: []} ,action){
	switch (action.type) {
		case "GET_USER":
			return {
				...state,
				fecthed: true,
				data: action.data
			}
			break;
	}
	return state;
}
export default userReducer;