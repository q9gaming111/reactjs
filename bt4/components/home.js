import React from 'react';
import {connect} from 'react-redux';
import Introduce from './introduce';
import Skills from './skills';
import * as fetch from '../actions/fetchIntro';

class Home extends React.Component{
	componentWillMount() {
		this.props.initIntroUser();
	}
	render() {
		return (
			<div id="home">
				<Introduce contact={this.props.introUser}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		introUser: state.introReducer
	}
}
const mapDispacthToProps = (dispatch) => {
	return {
		initIntroUser: () => {
			dispatch(fetch.fectUsers())
		}
	}
}
export default connect(mapStateToProps,mapDispacthToProps)(Home);