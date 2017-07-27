import React from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import * as fetch from '../actions/getListMovies';

class Movies extends React.Component {
	componentDidMount() {
		this.props.getMovie();
	}
	componentDidUpdate() {
		if( this.props.movie.fetched ) {
			$('.overlay').addClass('hidden');
		}
	}
	handleImageLoaded(e) {
		e.target.parentElement.children.item('span').className = 'hidden';
	} 
	render() {
		let detail = this.props.movie.data[0];
		let isFetched = this.props.movie.fetched;
		let BgImg = detail && detail.backdrop_path ? 'https://image.tmdb.org/t/p/original' + detail.backdrop_path : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g';
		let movieDetail= function(handleImageLoaded) {
			return (
				<div className="detail-page clr">
					<div className="poster-img">
						<span><i className="loading-icon"></i></span>
						<img src={'https://image.tmdb.org/t/p/w300' + detail.poster_path} onLoad={handleImageLoaded.bind(this)} />
					</div>
					<div className="detail">
						<h2 className="title">{detail.title}</h2>
						<h4 className="tagline">{detail.tagline}</h4>
						<p className="description">{detail.overview}</p>
						<div className="sub-info clr">
							<div className="item release">
								<div className="wrap">
									<h4 className="item-title">Original Release:</h4>
									<p>{detail.release_date}</p>
								</div>
							</div>
							<div className="item release">
								<div className="wrap">
									<h4 className="item-title">Running Time:</h4>
									<p>{detail.release_date}</p>
								</div>
							</div>
							<div className="item release">
								<div className="wrap">
									<h4 className="item-title">Total Vote</h4>
									<p>{detail.vote_count}</p>
								</div>
							</div>
							<div className="item release">
								<div className="wrap">
									<h4 className="item-title">Vote Average:</h4>
									<p>{detail.vote_average}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}

		return (
			<div className="movie" style={{backgroundImage: `url(` + BgImg + `)`}}>
				<div className="wrap">
					{ isFetched &&
						<div><a href="/" className="back">Home</a></div>
					}
					{
						isFetched &&
						movieDetail(this.handleImageLoaded)
					}
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		movie: state.Movies
	}
}
const mapDispacthToProps = (dispatch) => {
	return {
		getMovie: () => {
			dispatch(fetch.getMovieDetail(window.location.pathname))
		}
	}
}
export default connect(mapStateToProps,mapDispacthToProps)(Movies);