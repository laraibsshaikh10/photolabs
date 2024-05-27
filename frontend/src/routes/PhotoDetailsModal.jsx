import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PropTypes from 'prop-types';


const PhotoDetailsModal = ({isOpen, onClose, photo, photosData, favourites, toggleFavourite, onPhotoClick}) => {

  if (!isOpen || !photo) {
    return null;
  }
  console.log("Modal received photo details:", photo); 


return (
  <div className="photo-details-modal">
    <div className="modal-content">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      </div>
      
      <img src={photo.url} alt={photo.url} className="photo-details-image" />
      
      <div className="photo-details-modal__photographer-details">
      
      <img src={photo.profilePic} alt="profile picture" 
      className="photo-list__user-profile"/>
      
      <p  className="photo-list__username">{photo.username}</p>
      
      </div>
      
      <p className="photo-list__user-location">{photo.userLocation}</p>

      <div className="photo-details-modal__images">
        <h3>Similar Photos</h3>
        
        <PhotoList photos={photosData} favourites={favourites} toggleFavourite={toggleFavourite} onPhotoClick={onPhotoClick} />
        </div>
  </div>
);

};

PhotoDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  photo: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    profilePic: PropTypes.string,
    username: PropTypes.string,
    userLocation: PropTypes.string
  }),
  photosData: PropTypes.arrayOf(PropTypes.object).isRequired,
  favourites: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleFavourite: PropTypes.func.isRequired,
  onPhotoClick: PropTypes.func.isRequired
};


export default PhotoDetailsModal;
