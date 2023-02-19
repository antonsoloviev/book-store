import React from 'react';
import { ReactComponent as StarSVG } from '../../assets/images/icon-star.svg';
import './Rating.scss';

const createRatingArr = (rating: number): boolean[] =>
  Array.from({ length: 5 }, (_, number) => number + 1 <= Number(rating));

type RatingProps = {
  rating: number;
};

function Rating({ rating }: RatingProps) {
  const RatingArr = createRatingArr(rating);

  return (
    <div className="rating-stars">
      {RatingArr.map((item, index) => (
        <StarSVG
          key={index}
          fill={item ? 'black' : 'gray'}
          name={'star'}
          width={18}
          height={18}
        />
      ))}
    </div>
  );
}

export default Rating;
