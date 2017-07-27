import React from 'react';
import {connect} from 'react-redux';
class Gallary extends React.Component {
	render() {
		console.log(this.props)
		return (
			<div className="gallary-img">
				<div className="wrap"></div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		ghaha: state
	}
}
export default connect(mapStateToProps)(Gallary);