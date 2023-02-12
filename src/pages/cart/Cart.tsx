import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonBack from '../../components/Buttons/ButtonBack';

import './Cart.scss';

export const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="cart">
      <ButtonBack />
      <h2>YOUR CART</h2>
    </div>
  );
};
