import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/store';

import { ReactComponent as StarSVG } from '../../assets/images/icon-star.svg';
import { IBook } from '../../store/books-slice';
import Card from '../../components/Card/Card';

import './style.scss';
import Subscribe from '../../components/Subscribe/Subscribe';

// https://api.itbook.store/1.0/books/9781617294136

export interface IBookPage {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: number;
  price: string;
  publisher: string;
  rating: number;
  subtitle: string;
  title: string;
  url: string;
  year: number;
}

export function BookPage() {
  const [book, setBook] = useState<IBookPage>({
    authors: '',
    desc: '',
    error: '',
    image: '',
    isbn10: '',
    isbn13: '',
    language: '',
    pages: 0,
    price: '',
    publisher: '',
    rating: 0,
    subtitle: '',
    title: '',
    url: '',
    year: 0
  });
  const params = useParams();
  console.log(params);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://api.itbook.store/1.0/books/${params.id}`
      );
      const book = await response.json();
      setBook(book);
      console.log(book);
    };

    fetchPost();
  }, [params.id]);

  return (
    <div className="card-page">
      <h2>{book.title}</h2>
      <div className="top">
        <div className="top-image">
          <div className="like-box">
            <StarSVG className="like-box__star" alt="star"></StarSVG>
          </div>
          <img src={book.image} alt="book-image" />
        </div>
        <div className="top-add-to-card">
          <div className="top-add-to-card__raw numbers">
            <span>{book.price}</span>
            <div className="rating">{book.rating}</div>
          </div>
          <div className="top-add-to-card__raw authors">
            <span>Authors</span>
            <p className="authors-text">{book.authors}</p>
          </div>
          <div className="top-add-to-card__raw publisher">
            <span>Publisher</span>
            <p className="publisher-text">{book.publisher}</p>
          </div>
          <div className="top-add-to-card__raw language">
            <span>Language</span>
            <p className="language-text">{book.language}</p>
          </div>
          <div className="top-add-to-card__raw year">
            <span>Year</span>
            <p className="year-text">{book.year}</p>
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
      <div className="bottom">
        <p>{book.desc}</p>
      </div>
      <Subscribe></Subscribe>
    </div>
  );
}
