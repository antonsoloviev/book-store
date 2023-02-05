import React from 'react';

import './App.scss';
import LogoSVG from './assets/images/bookstore-logo.svg';
import IconFavSVG from './assets/images/icon-fav.svg';
import IconCartSVG from './assets/images/icon-cart.svg';
import IconUserSVG from './assets/images/icon-user.svg';
import IconSearchSVG from './assets/images/icon-search.svg';
import { ReactComponent as StarSVG } from './assets/images/icon-star.svg';
import BookSVG from './assets/images/image-9.png';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={LogoSVG} className="app-logo" alt="logo" />
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

      <div className="content">
        <h1>New Releases Books</h1>

        <div className="cards-container">
          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={BookSVG} alt="book" />
            </div>
            <div className="card-text">
              <div className="card-text-title">
                Android Apps for Absolute Beginners, 2nd Edition
              </div>
              <div className="card-text-auth-data">
                by Lentin Joseph, Apress 2018
              </div>
            </div>
            <div className="card-bottom">
              <p>$31.38</p>
              <div className="card-bottom-stars">
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
                <StarSVG className="card-bottom-stars__star" alt="star" />
              </div>
            </div>
          </div>
        </div>

        <section className="subscribe">
          <h2>SUBSCRIBE TO NEWSLETTER</h2>
          <p>
            Be the first to know about new IT books, upcoming releases,
            exclusive offers and more.
          </p>
          <div className="subscribe-bottom">
            <input type="text" />
            <button>SUBSCRIBE</button>
          </div>
        </section>

        <footer className="footer">
          <p>2022 Bookstore</p>
          <span>All rights reserved</span>
        </footer>

        {/* FONTS */}
        {/* <div className="font-200">New releases books NEW RELEASES BOOKS</div>
        <div className="font-300">New releases books NEW RELEASES BOOKS</div>
        <div className="font-400">New releases books NEW RELEASES BOOKS</div>
        <div className="font-700">New releases books NEW RELEASES BOOKS</div>

        <div className="font-helios-regular">
          New releases books NEW RELEASES BOOKS
        </div>

        <div className="font-helios-italic">
          New releases books NEW RELEASES BOOKS
        </div>

        <div className="font-helios-italic-light">
          New releases books NEW RELEASES BOOKS
        </div>

        <div className="font-helios-bold">
          New releases books NEW RELEASES BOOKS
        </div> */}
      </div>
    </div>
  );
}

export default App;
