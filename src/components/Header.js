import React from 'react';

// Assets
import logo from '../white_logo_transparent_background.svg';

function Header() {
  return (
    <header className="header">
      <a href="https://wanderingleafstudios.com">
        <img src={logo} className="logo" alt="Wandering Leaf Studios logo" />
      </a>
    </header>
  );
}

export default Header;
