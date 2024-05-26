import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({isOpen, onClose, photo}) => {
  if (!isOpen || !photo) {
    return null;
  }


return (
  <div className="photo-details-modal">
    <div className="modal-content">
      <button className="close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img src={photo.url} alt={photo.title} className="photo-details-image" />
      <h2>{photo.title}</h2>
      <p>{photo.description}</p>
    </div>
  </div>
);

};


export default PhotoDetailsModal;
