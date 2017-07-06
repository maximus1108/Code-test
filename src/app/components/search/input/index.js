import React from 'react';

//import dependencies - TextInput and SearchButton
import TextInput from './text-input';
import SearchButton from './search-btn';

//import styles
import './input.less';

//render component containing input box and search button
//filter components to be implemeneted in future
//purely presentational
const SearchInput = ({
  onClickSearch, //event handler passed down from Search, will fire a fetch to the search service
  onInputChange, //event handler passed down from Search, used to update property on the class containing current input
  onReturnPress, //event handler passed down from Search, will fire a fetch to the search service if enter key pressed
  className
}) => (
    <section
      id='search-input'
      className={className}
    >
    <div id="search-bar">
      <TextInput
        onChange={onInputChange} //pass onChange handler down to input box
        onKeyPress={onReturnPress}
      />
      <SearchButton
        onClick={onClickSearch} //pass onClick hander down to search button
      />
    </div>
    </section>
)

export default SearchInput;
