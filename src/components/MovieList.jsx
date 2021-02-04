// Movie list component
import React from 'react';
import MovieListItem from '../components/MovieListItem.jsx'

var MovieList = ({movies, haveWatched}) => (
  <div className='movie-list'>
    {movies.map((movie, i) => (
      <MovieListItem
        movie = {movie}
        key = {i}
        haveWatched = {haveWatched}
      />
    ))}
  </div>
);

export default MovieList;