import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <nav>
    <div className="container app__header nav-wrapper">
      <Link to="/" className="brand-logo">
        Welcome to Goophie!<img className="app__header__logo" src="http://i0.kym-cdn.com/photos/images/original/000/541/824/c51.gif" alt="zergling logo!" />
      </Link>
    </div>
  </nav>
);

export default Header;
