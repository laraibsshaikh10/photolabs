import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import PropTypes from 'prop-types';


const PhotoList = ({photos=[], favourites=[], toggleFavourite, onPhotoClick, showLikedPhotos}) => {
  const displayPhotos = showLikedPhotos ? favourites : photos;
  return (
    <ul className="photo-list">
       {displayPhotos.map((photo) => (
      
      <PhotoListItem

        key={photo.id}
        photo={photo}
        isFavourite={favourites.some(fav => fav.id === photo.id)}
        toggleFavourite={toggleFavourite}
        onPhotoClick={onPhotoClick}

      />
      
      ))}
      
    </ul>
  );
};


// Adding prop types for better type checking and documentation
PhotoList.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  favourites: PropTypes.arrayOf(PropTypes.object),
  toggleFavourite: PropTypes.func.isRequired,
  onPhotoClick: PropTypes.func.isRequired,
  // showLikedPhotos: PropTypes.bool.isRequired,
};

// Adding default props for optional props
PhotoList.defaultProps = {
  photos: [],
  favourites: [],
};

export default PhotoList;
