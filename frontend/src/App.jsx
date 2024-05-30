import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
 const {
  state: {
    isModalOpen,
    selectedPhoto,
    similarPhotos,
    favourites,
    photosData,
    topicsData
  },
  handleOpenModal,
  toggleFavourite,
  handleCloseModal
 } = useApplicationData();
  return (

    <div className="App">


      <HomeRoute 
        onPhotoClick = {handleOpenModal} 
        favourites={favourites} 
        toggleFavourite={toggleFavourite}
        photosData={photosData} 
        topicsData={topicsData}
      />
      <PhotoDetailsModal 
        isOpen={isModalOpen} 
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
