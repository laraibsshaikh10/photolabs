import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PropTypes from 'prop-types';
import PhotoFavButton from 'components/PhotoFavButton';


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
      <div className="modal-photo">
        <PhotoFavButton
          photo={photo}
          isFavourite={favourites}
          toggleFavourite={toggleFavourite}
        />
        <img src={photo.url} alt={photo.url} className="photo-details-image" />
      </div>

      <div className="photo-details-modal__photographer-details">
      
        <img src={photo.profilePic} alt="profile picture" 
        className="photo-list__user-profile"/>

        <div className="photo-details-modal__photographer-info">
          <h3  className="photo-details-modal__photographer-profile">{photo.username}</h3>
          <p className="photo-details-modal__photographer-location">{photo.userLocation}</p>
      </div>
    </div>

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
