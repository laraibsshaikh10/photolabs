import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photosData from 'mocks/photos';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
 const {
  state: {
    isModalOpen,
    selectedPhoto,
    similarPhotos,
    favourites
  },
  handleOpenModal,
  toggleFavourite,
  handleCloseModal
 } = useApplicationData();
  return (

    <div className="App">


      <HomeRoute onPhotoClick = {handleOpenModal} favourites={favourites} toggleFavourite={toggleFavourite} />
      <PhotoDetailsModal isOpen={isModalOpen} 
      onClose={handleCloseModal} 
      photo={selectedPhoto} 
      photosData={similarPhotos} 
      favourites={favourites} 
      toggleFavourite={toggleFavourite} 
      onPhotoClick={handleOpenModal} 
       />
    </div>
  );
};

export default App;
