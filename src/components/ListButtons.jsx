// List View Buttons

import React from 'react';

var ListButtons = ({toWatch, watched}) => (
  <div className='buton-box'>
     <div className='watched-list'>
       <button className ='watched-list-button' onClick={() => watched()}>
        Watched
       </button>
     </div>
     <div className='to-watch-list'>
       <button className ='to-watch-list-button' onClick={() => toWatch()}>
       To Watch
       </button>
     </div>
  </div>
);

export default ListButtons;