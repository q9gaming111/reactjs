import React from 'react';
import {render} from 'react-dom';
import Container from './components/body';
import Header from './components/header';
//Practice handle Event , State , and Props
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			homeLink: 'Home'
		};
	}

	changeLink(newLink) {
		this.setState({
			homeLink: newLink
		})
	}
	render() {
		return (
			<div id="wrapper">
				<Header initialLink={this.state.homeLink}/>
				<Container
				 	initialName={'Max'} 
				 	initialAge={27}
				 	initialLink={this.state.homeLink}
				 	changeLink={this.changeLink.bind(this)}
				/>
			</div>
		)
	}
}

render(<App/>, window.document.getElementById('app'));