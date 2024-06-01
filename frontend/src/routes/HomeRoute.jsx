import React, {useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = ({ fetchPhotosByTopic, photosData, topicsData, onPhotoClick, favourites, toggleFavourite }) => {
  
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation 
        topics={topicsData} 
        favourites={favourites} 
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <PhotoList 
        photos={photosData} 
        favourites={favourites} 
        toggleFavourite={toggleFavourite} 
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
