import React,{useState, useEffect} from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';

const TopNavigation = ({topics, favourites}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge count={favourites.length}/>
    </div>
  )
}


export default TopNavigation;