import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Root} from './components/root';
import {Home} from './components/home';
import {User} from './components/user';

var locationPathName = window.location.pathname;
//Practice Router
class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path={"/"} component={Root} >
					<IndexRoute component={Home}/>
					<Route path={"user/:id"} component={User} />
				</Route>
			</Router>
		)
	}
}

render(<App/>, window.document.getElementById('app'));