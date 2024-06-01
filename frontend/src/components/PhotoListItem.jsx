import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo, isFavourite, toggleFavourite, onPhotoClick }) => {
  const { id, location, urls, user } = photo;
  const handlePhotoClick = () => {
    if (onPhotoClick) {
      onPhotoClick(photo);
    }
  };

  return (
    <div className="photo-list__item">
      

      <div className="photo-list-photo">
        <PhotoFavButton
          photo={photo}
          isFavourite={isFavourite}
          toggleFavourite={toggleFavourite}
        />
        <img src={urls.regular} 
          alt={`Photo ${id}`}         
          className="photo-list__image" onClick={handlePhotoClick} 
          onClick={handlePhotoClick}
        />
      </div>

      <div className="photo-list__user-details">
        <img src={user.profile} alt={`${user.username}'s profile`} className="photo-list__user-profile" />

        <div className="photo-list__user-info">
          <h2 className="photo-list__username"> {user.username}</h2>
          <p className="photo-list__user-location"> {location.city}, {location.country}</p>
        </div>
      </div>

    </div>

  );

};

export default PhotoListItem;
