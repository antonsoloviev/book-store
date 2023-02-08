import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { booksNewUrl } from '../constants';

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
  count: number;
  error: null | string;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialBooksState: IbooksState = {
  books: [],
  count: 0,
  error: null,
  loading: 'idle'
};

export const getBooks = createAsyncThunk(
  'posts/getPosts',

  async () => {
    const response = await fetch(booksNewUrl);
    const result = await response.json();
    // const posts = result.results.map((post) => {
    //   post.liked = false;
    //   post.fav = false;
    //   return post;
    // })
    return result.books;
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooksState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state, action) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.books = action.payload;
    });
  }
});

export const booksSelector = (state: RootState) => {
  return state.books.books;
};

// export const { likePost, favPost } = postsSlice.actions;

export default booksSlice.reducer;
