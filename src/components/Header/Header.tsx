import React from 'react';

import LogoSVG from '../../assets/images/bookstore-logo.svg';
import IconFavSVG from '../../assets/images/icon-fav.svg';
import IconCartSVG from '../../assets/images/icon-cart.svg';
import IconUserSVG from '../../assets/images/icon-user.svg';
import IconSearchSVG from '../../assets/images/icon-search.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={LogoSVG} className="app-logo" alt="logo" />
      </Link>
      <div className="header-search">
        <input type="text" placeholder="Search..." />
        <img src={IconSearchSVG} alt="search" />
      </div>
      <div className="header-right">
        <img
          src={IconFavSVG}
          className="header-icon header-icon__fav"
          alt="logo"
        />
        <img
          src={IconCartSVG}
          className="header-icon header-icon__cart"
          alt="logo"
        />
        <img
          src={IconUserSVG}
          className="header-icon header-icon__user"
          alt="logo"
        />
      </div>
    </header>
  );
}

export default Header;
