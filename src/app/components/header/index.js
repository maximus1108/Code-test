import React from 'react';

// import dependency - nav component
import Nav from './nav';

//include styles for this component
import './header.less';

//render Header component
//this is simply presentation for now, as navigation to other pages
//will probably not be required for this test
//thus it does not need to know of any data or state
const Header = () => (
  <header className="main-header">
    <h1>Profile Search</h1>
    <Nav />
  </header>
)

export default Header;
