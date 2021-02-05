import React from 'react';
import TMBD_API_KEY from '../config/config.js'

var searchMovieDatabase = (options, callback) => {
  $.ajax({
    url: 'https://api.themoviedb.org/3/search/movie',
    type: 'GET',
    data: {
      api_key: options.api_key,
      query: options.query
    },

  }).done((data) => {
    console.log('Request Recieved')
    callback(data)
  }).fail(() => {
    console.log('Request Failed')
  })

}

export default searchMovieDatabase