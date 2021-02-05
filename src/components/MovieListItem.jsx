// Movie List Item Component
import React from 'react';
import MovieInfo from '../components/MovieInfo.jsx'

// var MovieListItem = ({movie, haveWatched}) => (
//   <div className='item-box'>
//     <div className='movie-item'>
//     {movie.title}
//     </div>
//     <button className='watch-toggle' id={movie.title + '-button'} onClick={() => haveWatched(movie.title)}>
//       Watched
//     </button>
//   </div>
// );

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

  }



  render() {
    return(
    <div className='item-box'>
      <div className='movie-item' onClick={() => {
        this.setState({visible: !this.state.visible})
        {this.props.infoGetter(this.props.movie.title)}
      }}>
       {this.props.movie.title}
      </div>
      <div className='info-container'>
        {this.state.visible ? <MovieInfo movie={this.props.movie.title} haveWatched={this.props.haveWatched} movieInfo={this.props.movieInfo}/> : null}
      </div>
    </div>
    )}
}

export default MovieListItem;