import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

// const FavBadge = ({ isFavPhotoExist }) => {
//   return (
//     <div className='fav-badge'>
//       <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
//     </div>
//   ) 
// };

const FavBadge = ({ count }) => {
  return (
    <div className='fav-badge'>
      <FavIcon selected={true}/>
      {count > 0 && <div className="fav-badge__count"><span>{count}</span> 
      </div>}
     

    </div>
  );
};

export default FavBadge;