import React from 'react';
import TMBD_API_KEY from '../config/config.js'

var searchMovieDatabase = (q, callback) => {
  $.ajax({
    url: 'https://api.themoviedb.org/3/search/movie',
    type: 'GET',
    data: {
      api_key: TMBD_API_KEY,
      query: q

    },

  }).done(() => {
    console.log('Request Recieved')
  }).fail(() => {
    console.log('Request Failed')
  })

}

export default searchMovieDatabase