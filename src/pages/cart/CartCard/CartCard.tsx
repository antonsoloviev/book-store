import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as CancelSVG } from '../../../assets/images/icon-cancel.svg';
import { ReactComponent as MinusSVG } from '../../../assets/images/icon-minus.svg';
import { ReactComponent as PlusSVG } from '../../../assets/images/icon-plus.svg';
import { useAppDispatch } from '../../../store/store';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem
} from '../../../store/cart-slice';

import { IBookPage } from '../../book-page/BookPage';
import './CartCard.scss';

type CartCardProps = {
  key: string;
  data: IBookPage;
};

function CartCard(props: CartCardProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="cart-card">
      <div className="cart-card-content">
        <Link to={`/books/${props.data.isbn13}`}>
          <div className="cart-card-img">
            <img src={props.data.image} alt="book" />
          </div>
        </Link>
        <div className="cart-card-text">
          <div className="cart-card-text-title">{props.data.title}</div>
          <div className="cart-card-text-subtitle">
            <span>{'by ' + props.data.authors + ', '}</span>
            <span>{props.data.publisher + ' ' + props.data.year}</span>
          </div>
          <div className="cart-card-text-counter">
            <div
              className="cart-card-text-counter__minus"
              onClick={() => dispatch(decrementQuantity(props.data))}
            >
              <MinusSVG />
            </div>
            <div className="cart-card-text-counter__quantity">
              {props.data.quantity}
            </div>
            <div
              className="cart-card-text-counter__plus"
              onClick={() => dispatch(incrementQuantity(props.data))}
            >
              <PlusSVG />
            </div>
          </div>
        </div>
        <div className="cart-card-price">
          <p>{props.data.price}</p>
          <div className="cart-card-bottom-stars"></div>
        </div>
      </div>
      <div className="cart-card-liked">
        <CancelSVG
          className="cart-card-liked__cancel"
          onClick={() => dispatch(removeItem(props.data))}
        ></CancelSVG>
      </div>
    </div>
  );
}

export default CartCard;
