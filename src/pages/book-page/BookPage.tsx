import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/store';

import { ReactComponent as HeartSVG } from '../../assets/images/icon-fav.svg';
import { favoritesIdsSelector, likeBook } from '../../store/books-slice';

import './BookPage.scss';
import Subscribe from '../../components/Subscribe/Subscribe';
import Button from '../../components/Buttons/Button';
import ButtonBack from '../../components/Buttons/ButtonBack';
import { addToCart, removeItem } from '../../store/cart-slice';
import Rating from '../../components/Rating/Rating';

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
  quantity: number;
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
    year: 0,
    quantity: 1
  });
  const params = useParams();
  const favoriteIds = useAppSelector(favoritesIdsSelector);
  const dispatch = useAppDispatch();
  const [ariaPressed, setAriaPressed] = useState(false);
  const [btnText, setBtnText] = useState('ADD TO CART');

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://api.itbook.store/1.0/books/${params.id}`
      );
      const book = await response.json();
      setBook(book);
    };

    fetchPost();
  }, [params.id]);

  const onButtonClick = () => {
    if (ariaPressed === false) {
      setAriaPressed(true);
      dispatch(addToCart(book));
      setBtnText('REMOVE FROM CART');
    } else {
      setAriaPressed(false);
      dispatch(removeItem(book));
      setBtnText('ADD TO CART');
    }
  };

  return (
    <div className="card-page">
      <ButtonBack />
      <h2>{book.title}</h2>
      <div className="top">
        <div className="top-image">
          <div
            className={
              favoriteIds?.includes(book.isbn13)
                ? 'like-box like-box__active'
                : 'like-box'
            }
            onClick={() => dispatch(likeBook(book.isbn13))}
          >
            <HeartSVG className="like-box__heart" alt="heart"></HeartSVG>
          </div>
          <img src={book.image} alt="book-image" />
        </div>
        <div className="top-add-to-card">
          <div className="top-add-to-card__raw numbers">
            <span>{book.price}</span>
            {/* <div className="rating">Rating: {book.rating}</div> */}
            <div className="rating">
              <Rating rating={book.rating}></Rating>
            </div>
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
          <button
            className="button button-add-to-cart"
            aria-pressed={ariaPressed}
            onClick={onButtonClick}
          >
            {btnText}
          </button>
        </div>
      </div>
      <div className="bottom">
        <p>{book.desc}</p>
      </div>
      <Subscribe></Subscribe>
    </div>
  );
}
