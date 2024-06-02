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
    topicsData,
    likedPhoto,
    showLikedPhotos
  },
  fetchPhotosByTopic,
  handleOpenModal,
  toggleFavourite,
  handleCloseModal,
  toggleLikedPhoto,
  toggleLikedPhotosDisplay
 } = useApplicationData();

 const favCount = favourites.length;
console.log('fav', favourites)
  return (

    <div className="App">

      <HomeRoute 
        onPhotoClick = {handleOpenModal} 
        showLikedPhotos={showLikedPhotos}
        favourites={favourites} 
        toggleFavourite={toggleFavourite}
        photosData={photosData} 
        topicsData={topicsData} 
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {/* <FavBadge count={favCount} 
        toggleLikedPhotosDisplay={toggleLikedPhotosDisplay} />
        {showLikedPhotos && <LikedPhotoList likedPhotos={favourites} />} */}


     
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
