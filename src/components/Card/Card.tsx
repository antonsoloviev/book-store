import React from 'react';

import { ReactComponent as StarSVG } from '../../assets/images/icon-star.svg';
import { IBook } from '../../store/books-slice';

import './style.scss';

type CardProps = {
  key: string;
  data: IBook;
};

function Card(props: CardProps) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.data.image} alt="book" />
      </div>
      <div className="card-text">
        <div className="card-text-title">{props.data.title}</div>
        <div className="card-text-subtitle">{props.data.subtitle}</div>
      </div>
      <div className="card-bottom">
        <p>{props.data.price}</p>
        <div className="card-bottom-stars">
          <StarSVG className="card-bottom-stars__star" alt="star" />
          <StarSVG className="card-bottom-stars__star" alt="star" />
          <StarSVG className="card-bottom-stars__star" alt="star" />
          <StarSVG className="card-bottom-stars__star" alt="star" />
          <StarSVG className="card-bottom-stars__star" alt="star" />
        </div>
      </div>
    </div>
  );
}

export default Card;
