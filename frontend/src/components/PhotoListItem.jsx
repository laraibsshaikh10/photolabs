import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = ({id, location, imageSource, username, profile}) => {
  return (
    <div className="photo-list__item">
      <div className="photo-list-photo">
        <img src={imageSource} alt={`Photo ${id}`} className="photo-list__image"/>
      </div>
      
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile"/>
      
        <div className="photo-list__user-info">
          <h2 className="photo-list__username"> {username}</h2>
          <p className="photo-list__user-location"> {location.city}, {location.country}</p>
        </div>
      </div>
      
    </div>
 
    )

};

export default PhotoListItem;
