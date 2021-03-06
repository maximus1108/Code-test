import React from 'react';

//include styles
import './results.less';

//purely presentational component
//used to render search results
const SearchResults = ({
  className,
  children //current search results to be rendered below
}) => {
  return (
    <section
      id='search-results'
      className={className}
    >
    <header className="section-header">
      <h2>Results</h2>
    </header>
      {children}
    </section>
  )
}

export default SearchResults;
