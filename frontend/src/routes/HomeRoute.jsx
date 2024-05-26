import React, {useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import photosData from 'mocks/photos';
import topicsData from 'mocks/topics';

const HomeRoute = () => {
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
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation topics={topicsData} favourites={favourites} />
      <PhotoList photos={photosData} favourites={favourites} toggleFavourite={toggleFavourite} />
    </div>
  );
};

export default HomeRoute;
