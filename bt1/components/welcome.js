import React from 'react';

export class Tick extends React.Component {
	render() {
		console.log(this.props.user)
		return (
			<ul>
				{this.props.user.name.map((names)=> <li>{names}</li>)}
			</ul>
		)
	}
}