// Search bar and button
import React from 'react';

var Search = ({search}) => (
  <div className='search-bar'>
    <input className='input-bar' type='text'/>
    <button className='search-button' onClick={() => search($('.input-bar').val())}>SEARCH</button>
  </div>

);

export default Search;