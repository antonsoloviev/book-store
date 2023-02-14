import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Card from '../../components/Card/Card';
import {
  getBooks,
  booksSelector,
  IBook,
  newBooksSelector
} from '../../store/books-slice';
import Subscribe from '../../components/Subscribe/Subscribe';

export const NewBooks = () => {
  const newBooks = useAppSelector(newBooksSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="new-releases">
      <h1>New Releases Books</h1>
      <div className="cards-container">
        {newBooks.map((book: IBook) => {
          return <Card key={book.isbn13} data={book} />;
        })}
      </div>
      <Subscribe></Subscribe>
    </div>
  );
};
