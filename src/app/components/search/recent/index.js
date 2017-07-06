import React from 'react';
import RecentItem from './recent-item';

//include styles
import './recent.less';

//render recent searches
const RecentSearches = ({
  className,
  recentSearches //list of recent searches passed as prop from Search class
}) => {



  return (
    <section
      id='search-recent'
      className={className}
    >
    <header className="section-header">
      <h2>Recent searches</h2>
    </header>
    <ul>
      {
        recentSearches.map((search, i) => (
            <li key={i}>
              <RecentItem
                text={search}
              />
            </li>
          )
        )
      }
    </ul>
    </section>
  )
}

export default RecentSearches;
