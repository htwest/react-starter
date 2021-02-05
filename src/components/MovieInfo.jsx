// Movie info component
import React from 'react';

var MovieInfo = ({movie, haveWatched, movieInfo}) => (
  <div className='info-box'>
    <div>
      Year: {movieInfo.release_date}
    </div>
    <div>
      Runtime:
    </div>
    <div>
      imdbRating: {movieInfo.vote_average}
    </div>
    <button className='watch-toggle' onClick={() => haveWatched(movie)}>
      Watched
    </button>

  </div>
)

export default MovieInfo;