import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { booksNewUrl, booksSearchUrl } from '../constants';

export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

interface IbooksState {
  books: IBook[];
  favBooks: IBook[];
  favoriteBooksIds: string[];
  count: number;
  error: null | string;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialBooksState: IbooksState = {
  books: [],
  favBooks: [],
  favoriteBooksIds: [],
  count: 0,
  error: null,
  loading: 'idle'
};

export const getBooks = createAsyncThunk(
  'books/getBooks',

  async () => {
    const response = await fetch(booksNewUrl);
    const result = await response.json();
    return result.books;
  }
);

export const getFavoritesBooks = createAsyncThunk(
  'favBooks/getFavoritesBooks',

  async (favIdsArray: string[]) => {
    const favIds = favIdsArray.join();
    const url: string = booksSearchUrl + favIds;
    const response = await fetch(url);
    const result = await response.json();
    return result.books;
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooksState,
  reducers: {
    likeBook(state, action) {
      const isbn13: string = action.payload;
      if (!state.favoriteBooksIds.includes(isbn13)) {
        state.favoriteBooksIds.push(isbn13);
      } else {
        state.favoriteBooksIds.splice(
          state.favoriteBooksIds.indexOf(isbn13, 1)
        );
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.books = action.payload;
    });

    builder.addCase(getFavoritesBooks.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(getFavoritesBooks.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.favBooks = action.payload;
    });
  }
});

export const booksSelector = (state: RootState) => {
  return state.books.books;
};

export const favoritesIdsSelector = (state: RootState) => {
  return state.books.favoriteBooksIds;
};

export const favBooksSelector = (state: RootState) => {
  return state.books.favBooks;
};

export const { likeBook } = booksSlice.actions;

export default booksSlice.reducer;
