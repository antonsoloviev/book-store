import React, { ChangeEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import IconSearchSVG from '../../assets/images/icon-search.svg';
import { fetchBooksThunk } from '../../store/books-api';
import { useAppDispatch } from '../../store/store';

import './Search.scss';

export const Search = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearchPosts = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchBooksThunk(`${e.target.value}`));
    navigate('/search');
  };

  return (
    <div className="header-search">
      <input type="text" placeholder="Search..." onChange={handleSearchPosts} />
      <img
        src={IconSearchSVG}
        alt="search"
        width={32}
        height={32}
        className="search-icon"
      />
    </div>
  );
};
