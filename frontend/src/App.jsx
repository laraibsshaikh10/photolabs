import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';


const App = () => {
  return (

    <div className="App">
      
      <TopNavigation />
      
      <PhotoList />
    </div>
  );
};

export default App;
