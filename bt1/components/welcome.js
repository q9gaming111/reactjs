import React from 'react';

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			quantity: props.initialNumb
		}
	}

	onUpdateName() {
		this.setState({
			quantity: this.state.quantity + 5
		})
	}
	render() {
		return (
			<div>
				<h3>{this.props.name} got <span>{this.state.quantity}$</span></h3>
				<button onClick={this.onUpdateName.bind(this)}>Add 5$</button>
			</div>
		)
	}
}