import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { NewBooks } from '../../pages/new-books/NewBooks';
import { BookPage } from '../../pages/book-page/BookPage';
import { Cart } from '../../pages/cart/Cart';
import { Favorites } from '../../pages/favorites/Favorites';

import { PageNotFound } from '../../pages/page-not-found/PageNotFound';
import { AccountPage } from '../../pages/account/AccountPage';
import { SearchPage } from '../../pages/search/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header></Header>
        <div className="content">
          <Routes>
            <Route path="/" element={<NewBooks />} />
            <Route path="/search/:input/:page" element={<SearchPage />} />

            <Route path="/books/:id" element={<BookPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/account" element={<AccountPage />}>
              <Route path="user-account" element={<Favorites />} />
            </Route>

            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
