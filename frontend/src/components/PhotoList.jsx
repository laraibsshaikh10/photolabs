import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({photos, favourites, toggleFavourite}) => {
  return (
    <ul className="photo-list">
       {photos.map((photo) => (
      
      <PhotoListItem

        key={photo.id}
        photo={photo}
        isFavourite={favourites.some(fav => fav.id === photo.id)}
        toggleFavourite={toggleFavourite}
      />
      
      ))}
      
    </ul>
  );
};

export default PhotoList;
