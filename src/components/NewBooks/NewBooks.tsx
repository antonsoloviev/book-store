import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Card from '../Card/Card';
import { getBooks, booksSelector } from '../../store/books-slice';

export const CardList = () => {
  const books = useAppSelector(booksSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="card-list">
      {books.map((book) => {
        return <Card key={book.isbn13} data={book} />;
      })}
    </div>
  );
};
