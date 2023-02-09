import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { NewBooks } from './pages/new-books/NewBooks';
import { BookPage } from './pages/book-page/BookPage';
import { PageNotFound } from './pages/page-not-found/PageNotFound';
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header></Header>
        <div className="content">
          <Routes>
            <Route path="/" element={<NewBooks />} />
            <Route path="/books/:id" element={<BookPage />} />
            {/* <Route path="/sign-in" element={<Registration />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} /> */}

            <Route path="/*" element={<PageNotFound />} />
          </Routes>

          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
