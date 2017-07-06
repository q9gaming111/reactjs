import React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {setName, setAge} from '../actions/userAction';
export var  User = function(props) {

	 function backToHome() {
		browserHistory.push('/');
	}
	return (
		<div className="user-page">
			<h1>User Name: {props.user.name}</h1>
			<h1>Age: {props.user.age}</h1>
			<hr/>
			<button onClick={() => props.setName('Thao')}>Change new Name</button>
			<hr/>
			<button onClick={() => props.setAge('44')}>Change new Name</button>
			<hr/>
			<button onClick={() => backToHome()}>Back to Home</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
		math: state.math
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch(setName(name));
		},
		setAge: (age) => {
			dispatch(setAge(age));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(User);