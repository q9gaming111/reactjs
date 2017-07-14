import React from 'react';

class Introduce extends React.Component {
	
	render() {

		let abc = (contactType,index) => {
			return (
				<div className="item" key={index}>
					<div className="wrap-item">
						<h4>{contactType.name}</h4>
						<p>{contactType.value}</p>
					</div>
				</div>
			)
		}
		return (
			<div className="introduce">
				<div className="wrap">
					<h2>Introduce</h2>
					<div className="content">
						<h3 className="title">Hi! I'm Tu Nguyen</h3>
						<p className="job-title">Front-End Developer</p>
						<div className="contact clr">
							{	
								this.props.contact.fetched &&
								this.props.contact.data.map((item,index) =>  abc(item,index))
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Introduce;