import React from 'react';

import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card/Card';
import { CardList } from './components/NewBooks/NewBooks';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>

      <div className="content">
        <h1>New Releases Books</h1>

        <div className="cards-container">
          <CardList></CardList>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
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

        <Footer></Footer>

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
