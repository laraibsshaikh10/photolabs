import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpenModal = (photo) => {
    const photoDetails = {
      url: photo.urls.regular,
      profilePic: photo.user.profile,
      username: photo.user.username,
      userLocation: `${photo.location.city}, ${photo.location.country}`
    }
    console.log("Opening modal with photo details:", photoDetails); 
    setSelectedPhoto(photoDetails);

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
      <PhotoDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} photo={selectedPhoto} />
    </div>
  );
};

export default App;
