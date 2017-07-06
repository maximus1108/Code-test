import React from 'react';
//import search icon as data uri
import icon from './assets/img/search-icon.png';

console.log(icon);

// include styles
import './search-btn.less';

//render a search button
const SearchButton = ({
  onClick //event handler passed down from Search, will fire a fetch to the search service
}) => (
  <button
    className="search-btn"
    onClick={onClick}
  >
    <img className="icon" src={icon} />
  </button>
)

export default SearchButton;
