import React from 'react';
// import {render} from 'react-dom';
// import {Router, Route, browserHistory, IndexRoute} from 'react-router';
// import {Root} from './components/root';
// import {Home} from './components/home';
// import {User} from './components/user';
import {createStore} from 'redux';

//Practice Router
// class App extends React.Component {
// 	render() {
// 		return (
// 			<Router history={browserHistory}>
// 				<Route path={"/"} component={Root} >
// 					<IndexRoute component={Home}/>
// 					<Route path={"user/:id"} component={User} />
// 				</Route>
// 			</Router>
// 		)
// 	}
// }

// render(<App/>, window.document.getElementById('app'));

var reducer = function(state,action){
	switch (action.type) {
		case "ADD":
			state = state + action.payload; 
			break;
		case "SUBTRACK":
			break;
	}
	return state;
}
var store = createStore(reducer,4);
store.subscribe(function(){
	console.log(store.getState())
});
store.dispatch({
	type: "ADD",
	payload: 10
})
