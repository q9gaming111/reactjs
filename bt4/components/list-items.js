import React from 'react';

var  ListItems = (props) => {
		let fecth = props.posts.fetched;
		return (
			<div className="list-items clr">
			<h2 className="title">List Users</h2>
			{ fecth &&
					props.posts.data.map((item,index) =>
						<div className="item" key={item.id}>
							<div className="wrap-item">
								<h3><a href={"users/" + item.id}>{item.name}</a></h3>
								<p className="description">Email: {item.email}</p>
								<p className="description">Company: {item.company.name}</p>
								<p className="description">Address: {item.address.street} {item.address.suite} {item.address.city}</p>
							</div>
						</div>
					)
				}
			</div>
		)
}

export default ListItems;