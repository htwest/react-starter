// Movie List Item Component
import React from 'react';

var MovieListItem = ({movie}) => (
  <div className='item-box'>
    <div className='movie-item'>
    {movie.title}
    </div>
  </div>
);

export default MovieListItem;