import React from 'react';

//render a button and the 'children' prop passed to it
const NavButton = ({
  children
}) => (
  <button>
    {children}
  </button>
)

export default NavButton;
