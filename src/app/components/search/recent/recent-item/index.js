import React from 'react';

//include styles
import './recent-item.less';

// a recent item
const RecentItem = ({
  text,
  onClick
}) => {

  return (
    <div
      className="recent-item"
      onClick={() => onClick(text)} //on click, execute handler passed down from Search class.
                                    // Wrap inside callback to pass text as first param, not event
    >
      <span className="recent-item-text">{text}</span>
      <img className="recent-item-image"/>
    </div>
  )
}

export default RecentItem;
