import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpenModal = (photo) => {
    console.log("Opening modal with photo:", photo); 

    setSelectedPhoto(photo);
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
