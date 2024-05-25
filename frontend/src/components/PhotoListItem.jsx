import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = ({id, location, imageSource, username, profile}) => {
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo ${id}`} className="photo"/>

      <img src={profile} alt={`${username}'s profile`} className="profile-pic"/>
      <div className="photo-info">
        <h2>{username}</h2>
        <p>{location.city}, {location.country}</p>
      </div>
    </div>)

};

export default PhotoListItem;
