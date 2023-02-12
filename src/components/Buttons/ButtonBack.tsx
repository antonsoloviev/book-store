import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonProps } from './Button';
import { ReactComponent as ArrowSVG } from '../../assets/images/icon-arrow-left.svg';

import './ButtonBack.scss';

const ButtonBack: React.FC<ButtonProps> = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="button-go-back">
      <ArrowSVG className="arrow-back"></ArrowSVG>
    </button>
  );
};

export default ButtonBack;
