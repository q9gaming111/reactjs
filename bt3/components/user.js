import React from 'react';
import {browserHistory} from 'react-router';

export class User extends React.Component {

	backToHome() {
		browserHistory.push('/');
	}

	render() {
		console.log(this.props)
		return (
			<div className="user-page">
				<h1>User ID: {this.props.params.id}</h1>
				<hr/>
				<button onClick={this.backToHome}>Back to Home</button>
			</div>
		)
	}
}