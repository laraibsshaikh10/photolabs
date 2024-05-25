import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = ({topic}) => {
  const {id, slug, title} = topic;
  return (
    <div className="topic-list__item">
      <span>
        <h1>{title}</h1>
      </span>

    </div>
  );
};

export default TopicListItem;
