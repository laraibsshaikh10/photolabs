import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photo) => {
    setFavourites((previousFavourites) => {
      if (previousFavourites.find(fav => fav.id === photo.id)) {
        return previousFavourites.filter(fav => fav.id !== photo.id);
      } else {
        return [...previousFavourites, photo]
      }
    });
  };

  const fetchSimilarPhotos = (photoId) => {
    // Filter out the selected photo to simulate similar photos
    return photos.filter(photo => photo.id !== photoId);
  };

  const handleOpenModal = (photo) => {
    const photoDetails = {
      url: photo.urls.regular,
      profilePic: photo.user.profile,
      username: photo.user.username,
      userLocation: `${photo.location.city}, ${photo.location.country}`
    }
    console.log("Opening modal with photo details:", photoDetails); 
    setSelectedPhoto(photoDetails);
    const similarPhotos = fetchSimilarPhotos(photo.id);
    setSimilarPhotos(similarPhotos);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");  
    setModalOpen(false);
    setSelectedPhoto(null);
  }
  return (

    <div className="App">


      <HomeRoute onPhotoClick = {handleOpenModal} />
      <PhotoDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} photo={selectedPhoto} 
      photosData={similarPhotos} // Assuming this prop is the one expected by PhotoList
      favourites={favourites} 
      toggleFavourite={toggleFavourite} 
      onPhotoClick={handleOpenModal} 
       />
    </div>
  );
};

export default App;
