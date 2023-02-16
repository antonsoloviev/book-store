import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons/Button';

import ButtonBack from '../../components/Buttons/ButtonBack';
import { cartSelector } from '../../store/cart-slice';
import { useAppSelector } from '../../store/store';
import { IBookPage } from '../book-page/BookPage';

import './Cart.scss';
import CartCard from './CartCard/CartCard';

export const Cart = () => {
  const cart = useAppSelector(cartSelector);

  const countTotal = (cart: IBookPage[]) => {
    const sum: number = cart.reduce(
      (accum, item) =>
        accum + item.quantity * Number(item.price.replace('$', '')),
      0
    );
    return sum.toFixed(2);
  };

  return (
    <div className="cart">
      <ButtonBack />
      <h2>YOUR CART</h2>
      <div className="cart-books">
        {cart.length ? (
          cart?.map((book: IBookPage) => {
            return <CartCard key={book.isbn13} data={book} />;
          })
        ) : (
          <div className="cart-empty">
            <p> YOUR CART IS EMPTY </p>
            <span>🙈</span>
          </div>
        )}
      </div>
      <div className="cart-total">
        {cart.length ? (
          <>
            <p>
              <span>TOTAL:</span>
              <span>{'$' + countTotal(cart)}</span>
            </p>
            <Link to={`/check-out`}>
              <Button
                text="CHECK OUT"
                className="button button-check-out"
                // eslint-disable-next-line no-console
                onClick={() => console.log('thank you')}
              ></Button>
            </Link>
          </>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};
