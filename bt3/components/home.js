import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import ListItem from './list-items';
import * as actions from '../actions/mathAction';
import * as fecth from '../actions/getTotalUser';
import store from '../store';

class Home extends React.Component{
	componentWillMount() {
		this.props.initRequestUsers();
	}
	render() {
		// console.log(this.props);
		//initial call request
		//this.props.initRequestUsers();

		actions.addLoading(this.props.posts.fetched);
		return (
			<div className="home-page">
				<ListItem posts={this.props.posts} />
				<div className="pagination">
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		posts: state.math
	}
}
const mapDispacthToProps = (dispatch) => {
	return {
		initRequestUsers: () => {
			dispatch(fecth.fectUsers())
		}
	}
}
export default connect(mapStateToProps,mapDispacthToProps)(Home);