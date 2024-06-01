import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

 const {
  state: {
    isModalOpen,
    selectedPhoto,
    similar_photos,
    favourites,
    photosData,
    topicsData
  },
  fetchPhotosByTopic,
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
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
     
      <PhotoDetailsModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        photo={selectedPhoto} 
        favourites={favourites} 
        toggleFavourite={toggleFavourite} 
        onPhotoClick={handleOpenModal} 
        
       />
    </div>
  );
};

export default App;
