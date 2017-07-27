import React from 'react';
import {connect} from 'react-redux';
import Introduce from './introduce';
import * as fetch from '../actions/getListMovies';

class Home extends React.Component{
	componentDidMount() {
		this.props.initIntroUser();
	}
	render() {
		return (
			<div id="home">
				<Introduce movies={this.props.moviesList} loadMore={this.props.initIntroUser} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		moviesList: state.Movies
	}
}
const mapDispacthToProps = (dispatch) => {
	return {
		initIntroUser: (page) => {
			dispatch(fetch.getMovies(page))
		}
	}
}
export default connect(mapStateToProps,mapDispacthToProps)(Home);