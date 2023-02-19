import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonBack from '../../../components/Buttons/ButtonBack';
import { useAppSelector } from '../../../store/store';
import { userSelector } from '../../../store/user-slice';
import { Registration } from '.././registartion/Registration';
import { Input } from '../input/Input';

import './UserAccount.scss';

export const UserAccount = () => {
  const navigate = useNavigate();
  const [userState, setUserState] = useState(false);
  const user = useAppSelector(userSelector);

  return (
    <div className="account-page-user">
      <ButtonBack />
      <h2>ACCOUNT</h2>
      <h3>PROFILE</h3>
      <div className="profile-container">
        <Input name="name" type="text" defaultValue={user.userName ?? ''} />
        <Input name="email" type="email" defaultValue={user.email ?? ''} />
      </div>
    </div>
  );
};
