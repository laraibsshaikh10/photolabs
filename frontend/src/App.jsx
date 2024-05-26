import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  }
  return (

    <div className="App">
      
      <HomeRoute onPhotoClick = {handleOpenModal} />
      <PhotoDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
