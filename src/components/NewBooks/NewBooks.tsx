import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Card from '../Card/Card';
import { getBooks, booksSelector, IBook } from '../../store/books-slice';

export const NewBooks = () => {
  const books = useAppSelector(booksSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="cards-container">
      {books.map((book: IBook) => {
        return <Card key={book.isbn13} data={book} />;
      })}
    </div>
  );
};
