import React from 'react';

export default class Container extends React.Component {
	constructor(props) {
		super();

		this.state = {
			age: props.initialAge,
			homeLink: props.initialLink,
			status: 0
		}
	}

	componentWillMount() {
		console.log('Component will mount');
	}
	componentDidMount() {
		console.log('Component did mount');
	}
	componentWillReceiveProps(nextProps) {
		console.log('Component will receive props',nextProps);
	}
	shouldComponentUpdate(nextProps,nextState){
		return true;
	}
	makeMeOlder(e) {

		this.setState({
			age: this.state.age + 3
		})
	}

	//passing functional from main.js
	handleChangeLink(){
		this.props.changeLink(this.state.homeLink)
	}

	//update new state.homeLink when typing input
	onHandleChange(event){
		this.setState({
			homeLink: event.target.value
		})
	}

	render() {
		return (
			<div className="container">
				<p>this is a new Component</p>
				<p>your name is {this.props.initialName}, your age is {this.state.age}</p>
				<hr/>
				<button onClick={this.makeMeOlder.bind(this)}>Make me older!</button>
				<hr/>
				<div className="changeLink">
					<input type="text"
						value={this.state.homeLink}
						onChange={(event) => this.onHandleChange(event)} />

					<button onClick={this.handleChangeLink.bind(this)}>Change Link</button>
				</div>
			</div>
		)
	}
}