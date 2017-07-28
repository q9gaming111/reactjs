import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import * as fetch from '../actions/getListMovies';

class Introduce extends React.Component {

	componentDidUpdate() {
		if( this.props.movies.fetched ) {
			$('.overlay').addClass('hidden');
		} else {
			$('.overlay').removeClass('hidden');
		}
	}
	onScroll() {
		var isLoading = true;
		var isFetched = this.props.movies.fetched;
		var props = this.props;
		$(window).on('scroll', function(){
			var scrollTop = $(this).scrollTop();
			var documentHeight = document.getElementById('app').offsetHeight;
			var windowH = document.documentElement.offsetHeight;
			if( scrollTop + windowH + 50 > documentHeight && isLoading ) {
				if( isFetched ) {
					isLoading = false;
					props.loadMore(props.movies.totalPage +=1)
				}
			}
		});
	}
	handleImageLoaded(e) {
		e.target.parentElement.children.item('span').className = 'hidden';
	} 
	render() {
		let movieDetail= function(item,index,handleImageLoaded) {
			let srcIMG = 'https://image.tmdb.org/t/p/w300' + item.poster_path;
			return (
				<div className="mv-item" key={index}>
					<div className="wrap-item">
						<h4 className="mv-title">{item.title}</h4>
						<a href={'movie/' + item.id}>
							<span><i className="loading-icon"></i></span>
							<img src={srcIMG} onLoad={handleImageLoaded.bind(this)} />
						</a>
						<p className="rate">Rate: {item.vote_average}</p>
						<p className="description">{item.overview}</p>
					</div>
				</div>
			)
		}

		return (
			<div className="introduce" onLoad={this.onScroll()}>
				<div className="wrap">
					<h2>Hot List Movies</h2>
					<div className="list-mv">
						{
							this.props.movies.data.map( (item,index) => 
								movieDetail(item,index,this.handleImageLoaded)
							)
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Introduce