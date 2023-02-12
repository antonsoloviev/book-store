import React, { useEffect } from 'react';

import {
  favBooksSelector,
  favoritesIdsSelector,
  getFavoritesBooks,
  IBook
} from '../../store/books-slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import FavCard from './FavCard/FavCard';

import './Favorites.scss';
import ButtonBack from '../../components/Buttons/ButtonBack';

export const Favorites = () => {
  const favoriteIds = useAppSelector(favoritesIdsSelector);
  const favBooks = useAppSelector(favBooksSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavoritesBooks(favoriteIds));
  }, [dispatch]);

  return (
    <div className="favorites">
      <ButtonBack />
      <h2>FAVORITES</h2>
      {favBooks?.map((book: IBook) => {
        return <FavCard key={book.isbn13} data={book} />;
      })}
    </div>
  );
};
