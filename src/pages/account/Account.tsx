import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonBack from '../../components/Buttons/ButtonBack';

import './Account.scss';

export const Account = () => {
  const navigate = useNavigate();

  return (
    <div className="account-page">
      <ButtonBack />
      <h2>ACCOUNT</h2>
    </div>
  );
};
