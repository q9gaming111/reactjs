import React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/mathAction';
import * as fecth from '../actions/getTotalUser';
import store from '../store';

class User extends React.Component {
	componentWillMount() {
		//initial call request
		this.props.initRequestUserDetail();
	}
	render() {
		var fecthed = this.props.user.fecthed;
		actions.addLoading(fecthed);
		return (
			<div className="user-page">
				{ this.props.user.fecthed &&
					<div>
						<h1>User Name : {this.props.user.data.username}</h1>
						<h3>User Id : {this.props.user.data.id}</h3>
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

const mapDispacthToProps = (dispatch) => {
	return {
		initRequestUserDetail: () => {
			dispatch(fecth.fectUserDetail(window.location.pathname))
		}
	}
}

// store.dispatch(fecth.fectUserDetail(window.location.pathname))
export default connect(mapStateToProps,mapDispacthToProps)(User);