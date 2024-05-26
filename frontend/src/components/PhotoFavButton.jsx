import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photo, isFavourite, toggleFavourite }) {
  // const [isActive, setIsActive] = useState(false);


  // const handleClick = () => {
  //    setIsActive(prevState => !prevState);
  // }
  
  return (
    // <div className="photo-list__fav-icon" onClick={handleClick} >
    //   <div className="photo-list__fav-icon-svg" >
    //     <FavIcon selected={isActive}/>
    
    //   </div>
    // </div>
   
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