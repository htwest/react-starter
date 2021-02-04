import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import searchMovieDatabase from '../src/lib/searchMovieDatabase.js'
import TMBD_API_KEY from '../src/config/config.js'

ReactDOM.render(<App searchMovieDatabase={searchMovieDatabase} API_KEY={TMBD_API_KEY}/>, document.getElementById('app'));
