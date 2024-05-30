import React from "react";
import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer, { ACTIONS } from "./useReducerApplicationData";


const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
  favourites: [],
  photosData: [],
  topicsData:[]
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('/api/photos')
      .then(response => {
        console.log('photos', response.data);  // Log the response to see the data
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch(error => {
        console.error('Error occurred while fetching photo data:', error);
      });


      axios.get('/api/topics')
      .then(response => {
        console.log('topics', response.data);  // Log the response to see the data
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data });
      })
      .catch(error => {
        console.error('Error occurred while fetching topic data:', error);
      });
  }, []);  // Empty dependency array to ensure this runs only once


  const fetchPhotosByTopic = (topicId) => {
    console.log(`Fetching photos for topic: ${topicId}`); 
    axios.get(`http://localhost:8001/api/topics/photos/${topicId}`)
    .then(response => {
      console.log('photosbytopic', response.data);  // Log the response to see the data
      dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPIC, payload: response.data });
    })
    .catch(error => {
      console.error('Error occurred while fetching photos by their topic:', error);
    });
  }

  const toggleFavourite = (photoId) => {
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
        userLocation: `${photo.location.city}, ${photo.location.country}`,
        similar_photos: photo.similar_photos 
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
    toggleFavourite,
    fetchPhotosByTopic,
    handleCloseModal

  }
};

export default useApplicationData;
