import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer, { ACTIONS } from "./useReducerApplicationData";


const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  similar_photos: [],
  favourites: [],
  photosData: [],
  topicsData:[],
  // likedPhoto: [],
  showLikedPhotos: false
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('/api/photos')
      .then(response => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch(error => {
        console.error('Error occurred while fetching photo data:', error);
      });


      axios.get('/api/topics')
      .then(response => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data });
      })
      .catch(error => {
        console.error('Error occurred while fetching topic data:', error);
      });
  }, []);  // Empty dependency array to ensure this runs only once


  const fetchPhotosByTopic = (topicId) => {
    axios.get(`http://localhost:8001/api/topics/photos/${topicId}`)
    .then(response => {
      dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPIC, payload: response.data });
    })
    .catch(error => {
      console.error('Error occurred while fetching photos by their topic:', error);
    });
  }

  const toggleFavourite = (photo) => {
    const isFavourite = state.favourites.some(fav => fav.id === photo.id);
    console.log('photo', photo);
    console.log({isFavourite})
    dispatch({
      type: isFavourite ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED,
      payload: photo
    });

    
  };

  // const toggleLikedPhoto = (photo) => {
  //   const isLiked = state.likedPhotos.some((likedPhoto) => likedPhoto.id === photo.id);

  //   // Dispatch an action to add/remove the liked photo
  //   dispatch({
  //     type: isLiked ? ACTIONS.LIKED_PHOTO_REMOVED : ACTIONS.LIKED_PHOTO_ADDED,
  //     payload: photo,
  //   });
  // };

  const toggleLikedPhotosDisplay = () => {
    console.log("Toggling liked photos display");

    dispatch({ type: ACTIONS.TOGGLE_LIKED_PHOTOS });

  };
  console.log(toggleLikedPhotosDisplay);


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
    handleCloseModal,
    // toggleLikedPhoto,
    toggleLikedPhotosDisplay

  }
};

export default useApplicationData;
