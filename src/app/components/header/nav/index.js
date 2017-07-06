import React from 'react';

//include styles for this component
import './nav.less';

//inport navigation button component
import NavButton from './nav-btn';

//render 3 buttons in the nav
//again this does not need to know of any state for the purposes of this test,
//and is therefore purely presentational
const Nav = () => (
  <nav>
    <NavButton>
      About
    </NavButton>
    <NavButton>
      Team
    </NavButton>
    <NavButton>
      Studio
    </NavButton>
  </ nav>
)

export default Nav;
