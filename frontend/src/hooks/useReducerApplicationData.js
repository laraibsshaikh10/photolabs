/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTOS_BY_TOPIC: 'SET_PHOTOS_BY_TOPIC'
};

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
        favourites: state.favourites.filter(id => id !== action.payload)
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

    // case ACTIONS.SELECT_PHOTO:
    //   const similar_photos = state.photosData.find(photo => photo.id === action.payload.id).similar_photos;
    //   similar_photos.action.payload = similar_photos;
    //   return {
    //     ...state,
    //     selectedPhoto: action.payload,
    //     similar_photos: state.photosData.filter(photo => photo.id !== action.payload.id),
    //     isModalOpen: true
    //   };


    case ACTIONS.SELECT_PHOTO:
      const selectedPhoto = action.payload;
      const similarPhotos = state.photosData.filter(photo => photo.id !== selectedPhoto.id);
      return {
        ...state,
        selectedPhoto: { ...selectedPhoto, similar_photos: similarPhotos },
        isModalOpen: true,
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
      };



    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export default reducer;


