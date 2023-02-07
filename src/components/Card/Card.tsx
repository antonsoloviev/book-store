import React from 'react';

import { ReactComponent as StarSVG } from '../../assets/images/icon-star.svg';
import BookSVG from '../../assets/images/image-9.png';

import './style.scss';

function Card(props: any) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={BookSVG} alt="book" />
      </div>
      <div className="card-text">
        <div className="card-text-title">
          Android Apps for Absolute Beginners, 2nd Edition
        </div>
        <div className="card-text-auth-data">by Lentin Joseph, Apress 2018</div>
      </div>
      <div className="card-bottom">
        <p>$31.38</p>
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
