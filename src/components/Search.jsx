// Search bar and button
import React from 'react';

var Search = ({search}) => (
  <div className='search-bar'>
    <input className='search-input-bar' type='text'/>
    <button className='search-button' onClick={() => search($('.search-input-bar').val())}>Search</button>
  </div>

);

export default Search;