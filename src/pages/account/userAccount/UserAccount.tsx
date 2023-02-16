import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonBack from '../../../components/Buttons/ButtonBack';
import { Registration } from '.././registartion/Registration';

import './AccountPage.scss';

export const AccountPage = () => {
  const navigate = useNavigate();
  const [userState, setUserState] = useState(false);

  return (
    <div className="account-page">
      <ButtonBack />
      <h2>ACCOUNT</h2>
    </div>
  );
};
