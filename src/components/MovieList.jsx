// Movie list component
import React from 'react';
import MovieListItem from '../components/MovieListItem.jsx'

var MovieList = ({movies}) => (
  <div className='movie-list'>
    {movies.map((movie, i) => (
      <MovieListItem
        movie = {movie}
        key = {i}
      />
    ))}
  </div>
);

export default MovieList;