import React from 'react';

//include styles
import './recent-item.less';

// a recent item
const RecentItem = ({
  text
}) => {

  return (
    <div className="recent-item">
      <span className="recent-item-text">{text}</span>
      <img className="recent-item-image"/>
    </div>
  )
}

export default RecentItem;
