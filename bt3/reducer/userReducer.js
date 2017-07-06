var initialState = {
	name: 'Tu Nguyen',
	age: 18,
	array: []
};

var userReducer = function( state = initialState ,action){
	switch (action.type) {
		case "SETNAME":
			state = Object.assign({}, state);
			state.name = action.payload;
			break;
		case "SETAGE":
			state = Object.assign({}, state);
			state.age = action.age;
			break;
	}
	return state;
}
export default userReducer;