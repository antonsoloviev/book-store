import { createAsyncThunk } from '@reduxjs/toolkit';

import { booksSearchUrl } from '../constants';
import { buildUrl } from '../helpers/buildUrl';
import { IBook } from './books-slice';

//TODO Search
export interface IBooksResponse {
  books: IBook[];
  total: number;
}

interface ISearch {
  input: string | undefined;
  page: string | undefined;
}

export const fetchBooksThunk = createAsyncThunk<
  IBooksResponse,
  string | Record<string, string> | string[][] | URLSearchParams
>('books/fetchBooks', async (booksUrlParams, thunkAPI) => {
  try {
    const url = buildUrl(booksSearchUrl, booksUrlParams);
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const fetchBooksSearchThunk = createAsyncThunk(
  'books/fetchBooksSearch',
  async ({ input, page }: ISearch, thunkAPI) => {
    try {
      const response = await fetch(`${booksSearchUrl}/${input}/${page}`);
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
