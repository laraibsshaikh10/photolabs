import { act } from "react";

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTOS_BY_TOPIC: 'SET_PHOTOS_BY_TOPIC',
  // LIKED_PHOTO_ADDED: 'LIKED_PHOTO_ADDED',
  // LIKED_PHOTO_REMOVED: 'LIKED_PHOTO_REMOVED',
  TOGGLE_LIKED_PHOTOS: 'TOGGLE_LIKED_PHOTOS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter(photo => photo.id !==action.payload.id)
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photosData: action.payload
      };

    case ACTIONS.SET_PHOTOS_BY_TOPIC:
      return {
      ...state,
        photosData: action.payload // Assuming you want to replace photosData with the new set
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicsData: action.payload
      };

    case ACTIONS.SELECT_PHOTO:
      const similar_photos = state.photosData.find(photo => photo.id === action.payload.id).similar_photos;
      action.payload.similar_photos = similar_photos;

      return {
        ...state,
        selectedPhoto: action.payload,
        similar_photos: state.photosData.filter(photo => photo.id !== action.payload.id),
        isModalOpen: true
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: true
      };

    case ACTIONS.CLOSE_PHOTO_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null
      }
  
    // case ACTIONS.LIKED_PHOTO_ADDED:
    //   return {
    //     ...state,
    //     likedPhotos: [...state.likedPhotos, action.payload], // Adding the photo
    //   };
    // case ACTIONS.LIKED_PHOTO_REMOVED:
    //   return {
    //     ...state,
    //     likedPhotos: state.likedPhotos.filter(photo => photo.id !== action.payload.id), // Removing the photo
    //   };

    case ACTIONS.TOGGLE_LIKED_PHOTOS: // Handling action for toggling liked photos
    console.log("Current showLikedPhotos state:", state.showLikedPhotos);
    const newState = { ...state, showLikedPhotos: !state.showLikedPhotos };
    console.log("Updated showLikedPhotos state:", newState.showLikedPhotos);

      return newState;
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export default reducer;


