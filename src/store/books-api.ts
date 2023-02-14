import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { booksNewUrl, booksSearchUrl } from '../constants';
import { buildUrl } from '../helpers/buildUrl';
import { IBook } from './books-slice';

//TODO Search
export interface IBooksResponse {
  books: IBook[];
  total: number;
}

export const fetchBooksThunk = createAsyncThunk<
  IBooksResponse,
  string | Record<string, string> | string[][] | URLSearchParams
>('books/fetchBooks', async (booksUrlParams, { rejectWithValue }) => {
  try {
    const url = buildUrl(booksSearchUrl, booksUrlParams);
    console.log(url);
    const response = await fetch(url);
    return response.json();
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});
