import React from 'react';

import LogoSVG from '../../assets/images/bookstore-logo.svg';
import IconSearchSVG from '../../assets/images/icon-search.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartSVG } from '../../assets/images/icon-fav.svg';
import { ReactComponent as CartSVG } from '../../assets/images/icon-cart.svg';
import { ReactComponent as UserSVG } from '../../assets/images/icon-user.svg';

import './Header.scss';
import { useAppSelector } from '../../store/store';
import { favoritesIdsSelector } from '../../store/books-slice';
import { cartSelector } from '../../store/cart-slice';
import { Search } from '../Search/Search';

function Header() {
  const favoriteIds = useAppSelector(favoritesIdsSelector);
  const cart = useAppSelector(cartSelector);

  return (
    <header className="header">
      <Link to="/">
        <img src={LogoSVG} className="app-logo" alt="logo" />
      </Link>
      {/* <div className="header-search">
        <input type="text" placeholder="Search..." />
        <img src={IconSearchSVG} alt="search" />
      </div> */}
      <Search></Search>
      <div className="header-right">
        <Link to="/favorites">
          <HeartSVG
            className={
              favoriteIds.length > 0
                ? 'header-icon header-icon__active header-icon__fav'
                : 'header-icon header-icon__fav'
            }
          ></HeartSVG>
        </Link>
        <Link to="/cart">
          <CartSVG
            // className="header-icon header-icon__cart"
            className={
              cart.length > 0
                ? 'header-icon header-icon__active header-icon__cart'
                : 'header-icon header-icon__cart'
            }
          ></CartSVG>
        </Link>
        <Link to="/account">
          <UserSVG className="header-icon header-icon__user"></UserSVG>
        </Link>
      </div>
    </header>
  );
}

export default Header;
