import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, fetchPhotosByTopic }) => {
  console.log('topics', topics);
  return (
    <div className="top-nav-bar__topic-list">

      {topics.map((topic) => (

        <TopicListItem

          key={topic.id}
          topic={topic}
          fetchPhotosByTopic={fetchPhotosByTopic}
        />

      ))}

    </div>

  );
};

export default TopicList;
