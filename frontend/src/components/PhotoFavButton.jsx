import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photo, isFavourite, toggleFavourite }) {
  // console.log('isFavourite', isFavourite);
  return (
   
   <div className={`photo-fav-button ${isFavourite ? 'photo-fav-button__active' : ''}`}
    onClick={() => toggleFavourite(photo)}
    aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}>
      <div className="photo-list__fav-icon-svg" >

    <FavIcon selected={isFavourite}/>
    </div>
</div>
  );
};

export default PhotoFavButton;