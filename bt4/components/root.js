import React from 'react';
import Navigation from './nav-bar';
export default class Root extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				<div className="container">
					{this.props.children}
				</div>
			</div>				
		)
	}
}