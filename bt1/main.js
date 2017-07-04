import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './components/welcome';
import {Header} from './components/header';
//Practice handle Event , State , and Props
class App extends React.Component {
	render() {
		return (
			<Header />
		)
	}
}

ReactDOM.render(<App/>, window.document.getElementById('app'));