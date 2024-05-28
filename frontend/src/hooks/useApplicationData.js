import React from "react";
import { useState } from "react";
import photosData from "mocks/photos";

const useApplicationData = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photo) => {
    setFavourites((previousFavourites) => {
      const isFavourite = previousFavourites.find(fav => fav.id === photo.id);
      const updatedFavourite = isFavourite
      ? previousFavourites.filter(fav => fav.id !== photo.id) 
      : [...previousFavourites, photo];
      
      console.log('Favourites updated:', updatedFavourite);
      return updatedFavourite;
    });
  };

  const fetchSimilarPhotos = (photoId) => {
    // Filter out the selected photo to simulate similar photos
    return photosData.filter(photo => photo.id !== photoId);
  };

  const handleOpenModal = (photo) => {
    const photoDetails = {
      id: photo.id,
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
  };

  return {
    state: {
      isModalOpen,
      selectedPhoto,
      similarPhotos,
      favourites
    },

    handleOpenModal,
    toggleFavourite: toggleFavourite,
    handleCloseModal
  };
};

export default useApplicationData;
