import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as HeartSVG } from '../../../assets/images/icon-fav.svg';

import './FavCard.scss';
import { CardProps } from '../../../components/Card/Card';

// type CardProps = {
//   key: string;
//   data: IBook;
// };

function FavCard(props: CardProps) {
  return (
    <Link to={`/books/${props.data.isbn13}`}>
      <div className="fav-card">
        <div className="fav-card-content">
          <div className="fav-card-img">
            <img src={props.data.image} alt="book" />
          </div>
          <div className="fav-card-text">
            <div className="fav-card-text-title">{props.data.title}</div>
            <div className="fav-card-text-subtitle">{props.data.subtitle}</div>
            <div className="fav-card-bottom">
              <p>{props.data.price}</p>
              <div className="fav-card-bottom-stars"></div>
            </div>
          </div>
        </div>
        <div className="fav-card-liked">
          <HeartSVG className="fav-card-liked__heart"></HeartSVG>
        </div>
      </div>
    </Link>
  );
}

export default FavCard;
