import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Card from '../../components/Card/Card';
import { booksSelector, IBook, totalSelector } from '../../store/books-slice';
import { fetchBooksSearchThunk } from '../../store/books-api';
import { useParams } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';

export const SearchPage = () => {
  const books = useAppSelector(booksSelector);
  const total = useAppSelector(totalSelector);
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(
      fetchBooksSearchThunk({
        input: params.input,
        page: params.page
      })
    );
  }, [params]);

  const totalPages = Math.ceil(total / 10);

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
        input={params.input}
        currentPage={Number(params.page ?? 1)}
        totalPages={totalPages}
      />
    </div>
  );
};
