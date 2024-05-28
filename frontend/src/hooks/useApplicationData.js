import React from "react";
import { useState, useReducer } from "react";
import photosData from "mocks/photos";
import reducer, { ACTIONS } from "./useReducerApplicationData";


const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
  favourites: [],
  photosData: photosData
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //In your toggleFavourite function, you're currently storing the entire photo object in the favourites list. This could potentially use a lot of memory if there are many favourites and the photo objects are large. Consider storing just the photo IDs in the favourites list, as this would be more memory-efficient.

  const toggleFavourite = (photoId) => {
    // setFavourites((previousFavourites) => {
      const isFavourite = state.favourites.includes(photoId);
      dispatch({
        type: isFavourite? ACTIONS.FAV_PHOTO_REMOVED: ACTIONS.FAV_PHOTO_ADDED,
        payload: photoId
      });
 
  };

  // const fetchSimilarPhotos = (photoId) => {
  //   return photosData.filter(photo => photo.id !== photoId);
  // };

  const handleOpenModal = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: {
        id: photo.id,
        url: photo.urls.regular,
        profilePic: photo.user.profile,
        username: photo.user.username,
        userLocation: `${photo.location.city}, ${photo.location.country}`
      }
    })

  };

  const handleCloseModal = () => {
    dispatch({
      type: ACTIONS.CLOSE_PHOTO_MODAL
    });
 
  };

  return {
    
    state,
    handleOpenModal,
    toggleFavourite: toggleFavourite,
    handleCloseModal

  }
};

export default useApplicationData;
