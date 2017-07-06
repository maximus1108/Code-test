import React from 'react';

//Import dependencies - header and search components
import Header from './components/header';
import Search from'./components/search';

//Import global css styles
import './assets/less/global.less';

//render app
// simply presentational for now,
// as it does not need to know of any data or state
const App = () => (
  <div id="app">
    <Header />
    <Search />
  </div>
)

export default App;
