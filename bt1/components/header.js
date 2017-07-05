import React from 'react';

export default class Header extends React.Component {

	render() {
		return (
			<div className="header">
				<a href="">{this.props.initialLink}</a>
			</div>
		)
	}
}