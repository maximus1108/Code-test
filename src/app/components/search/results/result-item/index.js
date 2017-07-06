import React from 'react';

//import styles
import './result-item.less'

//component for rendering each individual search result
const ResultItem = ({
  //will receive name, avatar and role parameter
  //from 'mapResultsToOutput' method on Search class
  //props received from service and passed own via search
  name,
  avatar,
  role
}) => (
  <div className="result-item">
    <img
      className="result-item-image"
      src={avatar} // set source of image avatar prop
    />
    <p className="result-item-textwrapper">
      <span className="result-item-name">
        {name}
      </span>
      <span className="result-item-role">
        {role}
      </span>
    </p>
  </div>
)

export default ResultItem;
