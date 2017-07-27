import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import Root from './components/root';
import Home from './components/home';
import Movie from './components/movie';
import store from './store';

class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path={"/"} component={Root} >
					<IndexRoute component={Home}/>
					<Route path={"movie/:id"} component={Movie} />
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
