import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({isOpen, onClose, photo}) => {
  if (!isOpen || !photo) {
    return null;
  }
  console.log("Modal received photo details:", photo); 


return (
  <div className="photo-details-modal">
    <div className="modal-content">
      <button className="close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      </div>
      
      <img src={photo.url} alt={photo.url} className="photo-details-image" />
      
      <div className="profile-information-modal">

      <img src={photo.profilePic} alt="profile picture" 
      className="photo-list__user-profile"/>
      <div>
      <h2  className="photo-list__username">{photo.username}</h2>
      <p className="photo-list__user-location">{photo.userLocation}</p>
      </div>
      </div>
  </div>
);

};


export default PhotoDetailsModal;
