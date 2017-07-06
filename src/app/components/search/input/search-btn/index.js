import React from 'react';

// include styles
import './search-btn.less';

//render a search button
const SearchButton = ({
  onClick //event handler passed down from Search, will fire a fetch to the search service
}) => (
  <button
    className="search-btn"
    onClick={onClick}
  />
)

export default SearchButton;
