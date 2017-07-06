var mathReducer = function( state = {
	result: 10,
	array: []
},action){
	switch (action.type) {
		case "ADD":
			state = {
				result: 10,
				array: []
			},
			state.result = state.result + action.payload; 
			break;
		case "SUBTRACK":
			break;
	}
	return state;
}
export default mathReducer;