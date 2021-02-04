// add movie to list component

import React from 'react';

var AddToMovieList = ({add}) => (
 <div className='add-bar'>
  <input className='add-input-bar' type='text'/>
  <button className='add-button'onClick={() => add($('.add-input-bar').val())}>Add To List</button>
</div>
);

export default AddToMovieList;