import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { booksSearchUrl } from '../constants';
import { IBookPage } from '../pages/book-page/BookPage';

interface IcartState {
  cart: IBookPage[];
  cartBooksIds: string[];
  count: number;
  error: null | string;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialCartState: IcartState = {
  cart: [],
  cartBooksIds: [],
  count: 0,
  error: null,
  loading: 'idle'
};

export const getCartBooks = createAsyncThunk(
  'cart/getCartBooks',

  async (cartBooksIds: string[]) => {
    const cartIds = cartBooksIds.join();
    const url: string = booksSearchUrl + cartIds;
    const response = await fetch(url);
    const result = await response.json();
    return result.books;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.cart.find(
        (item) => item.isbn13 === action.payload.isbn13
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.isbn13 === action.payload.isbn13
      );
      if (item != undefined) {
        item.quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.isbn13 === action.payload.isbn13
      );
      if (item != undefined) {
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.isbn13 !== action.payload.isbn13
      );
      state.cart = removeItem;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCartBooks.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(getCartBooks.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.cart = action.payload;
    });
  }
});

export const cartBooksIdsSelector = (state: RootState) => {
  return state.cart.cartBooksIds;
};

export const cartSelector = (state: RootState) => {
  return state.cart.cart;
};

export const { addToCart, decrementQuantity, incrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
