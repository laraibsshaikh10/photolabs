import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';

const TopNavigation = ({topics, favourites, fetchPhotosByTopic, toggleLikedPhotosDisplay}) => {
  const favCount = favourites ? favourites.length : 0;

  const handleClickTopic = (topicId)=> {
    fetchPhotosByTopic(topicId);
  }


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {topics.map(topic => { 
        <div key={topic.id} className="top-nav-bar__topic" onClick={() => handleClickTopic(topic.id)}>
        {topic.title} 
          </div>
       })}
      <TopicList 
        topics={topics}
        onClickTopic={handleClickTopic} 
        fetchPhotosByTopic={fetchPhotosByTopic}
      />

      <FavBadge 
        count={favCount}
        toggleLikedPhotosDisplay={toggleLikedPhotosDisplay}
      />
    </div>
  )
}


export default TopNavigation;