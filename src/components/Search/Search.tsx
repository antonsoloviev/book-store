import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import IconSearchSVG from '../../assets/images/icon-search.svg';
// import { fetchBooksSearchThunk, fetchBooksThunk } from '../../store/books-api';
// import { useAppDispatch } from '../../store/store';

import './Search.scss';

export const Search = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const params = useParams();

  const handleSearchPosts = (e: ChangeEvent<HTMLInputElement>) => {
    // dispatch(fetchBooksSearchThunk({ input: params.input, page: params.page }));
    navigate(`/search/${e.target.value}/1`);
  };

  return (
    <div className="header-search">
      <input type="text" placeholder="Search..." onChange={handleSearchPosts} />
      <img src={IconSearchSVG} alt="search" className="search-icon" />
    </div>
  );
};
