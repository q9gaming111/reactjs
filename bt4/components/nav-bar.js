import React from 'react';
import $ from 'jquery';

function windowLoad() {
	$(window).on('load', function(){
		
	});
}

class Navigation extends React.Component {
	render() {
		windowLoad();
		return (
			<div className="navigation">
				<div className="avarta-img" style={{backgroundImage: `url(../images/avarta.jpg)`}}>
				</div>
				<div className="menu">
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/gallary">Gallary</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Navigation;