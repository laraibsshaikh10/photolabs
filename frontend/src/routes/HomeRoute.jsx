import React, {useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import photosData from 'mocks/photos';
import topicsData from 'mocks/topics';

const HomeRoute = ({ onPhotoClick, favourites, toggleFavourite }) => {
  
  
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation topics={topicsData} favourites={favourites} />
      <PhotoList photos={photosData} favourites={favourites} toggleFavourite={toggleFavourite} onPhotoClick={onPhotoClick}/>
    </div>
  );
};

export default HomeRoute;
