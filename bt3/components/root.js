import React from 'react';

export class Root extends React.Component {

	render() {
		return (
			<div>
				<ul className="clr">
					<li><a href="/">Home</a></li>
					<li><a href="/user">User</a></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}