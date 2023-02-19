import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonBack from '../../components/Buttons/ButtonBack';
import { Registration } from './registartion/Registration';

import './AccountPage.scss';
import { UserAccount } from './userAccount/UserAccount';
import { useAppSelector } from '../../store/store';
import { userSelector } from '../../store/user-slice';

export const AccountPage = () => {
  const navigate = useNavigate();
  const [userState, setUserState] = useState(false);
  const user = useAppSelector(userSelector);

  return (
    <div className="account-page">
      {/* <ButtonBack />
      <h2>ACCOUNT</h2> */}
      {user.email ? (
        <>
          <UserAccount />
        </>
      ) : (
        <Registration></Registration>
      )}
    </div>
  );
};
