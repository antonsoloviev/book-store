import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Card from '../../components/Card/Card';
import {
  getBooks,
  booksSelector,
  IBook,
  totalSelector
} from '../../store/books-slice';
import Subscribe from '../../components/Subscribe/Subscribe';
import { fetchBooksThunk } from '../../store/books-api';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';

export const SearchPage = () => {
  const books = useAppSelector(booksSelector);
  const total = useAppSelector(totalSelector);
  const dispatch = useAppDispatch();
  const [params] = useSearchParams();

  // useEffect(() => {
  //   dispatch(fetchBooksThunk('pro'));
  // }, [dispatch]);

  // const handleSearchPosts = (e: ChangeEvent<HTMLInputElement>) => {
  //   dispatch(fetchBooksThunk(`${e.target.value}`));
  // };

  const totalPages = Math.ceil(total / 10);
  console.log(totalPages);

  return (
    <div className="new-releases">
      <h1>SEARCH RESULTS:</h1>
      <div className="cards-container">
        {books ? (
          <>
            {books.map((book: IBook) => {
              return <Card key={book.isbn13} data={book} />;
            })}
          </>
        ) : (
          <span></span>
        )}
      </div>
      <Pagination
        currentPage={Number(params.get('page') ?? 1)}
        totalPages={totalPages}
      />
    </div>
  );
};
