// Movie List Item Component
import React from 'react';

var MovieListItem = ({movie, haveWatched}) => (
  <div className='item-box'>
    <div className='movie-item'>
    {movie.title}
    </div>
    <button className='watch-toggle' id={movie.title + '-button'} onClick={() => haveWatched(movie.title)}>
      Watched
    </button>
  </div>
);

export default MovieListItem;