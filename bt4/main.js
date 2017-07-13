import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Root} from './components/root';
import Home from './components/home';
import User from './components/user';
import store from './store';
import {Provider} from 'react-redux';

class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path={"/"} component={Root} >
					<IndexRoute component={Home}/>
					<Route path={"home"} component={Home} />
					<Route path={"users/:id"} component={User} />
				</Route>
			</Router>
		)
	}
}
render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	window.document.getElementById('app'));
