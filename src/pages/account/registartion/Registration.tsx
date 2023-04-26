import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { useAppDispatch } from '../../../store/store';
import { Input } from '../input/Input';
import { setUser } from '../../../store/user-slice';
import { ReactComponent as GoogleSVG } from '../../../assets/images/icon-google.svg';

import './Registration.scss';
import Button from '../../../components/Buttons/Button';

export const Registration = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const [tabIndex, setTabIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [warning, setWarning] = useState('');
  const provider = new GoogleAuthProvider();

  const handleSignIn = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setWarning('WELCOME');
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            userName: user.displayName
          })
        );
        nav('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        if (
          errorCode === 'auth/wrong-password' ||
          errorCode === 'auth/user-not-found'
        ) {
          setWarning('password or email is incorrect');
          return;
        }
      });
  };

  const handleSignUp = (email: string, password: string, name: string) => {
    if (password !== confirmPassword) {
      setWarning('Confirm-password must be the same as password');
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name
        });
        setWarning('you have successfully registered, please sign in!');
        setTabIndex(0);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          setWarning('user with this email already exists');
          return;
        }
        if (errorCode === 'auth/weak-password') {
          setWarning('password is weak, must be more then 5 symbols');
          return;
        }
      });
  };

  const handleLoginWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        setWarning('WELCOME');
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            userName: user.displayName
          })
        );
        nav('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="registration">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SIGN IN</Tab>
          <Tab>SIGN UP</Tab>
        </TabList>
        <TabPanel>
          <div className="form-container">
            <p className="warning-message">{warning}</p>
            <Input
              name="email"
              type="email"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
            <Input
              name="password"
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
            <Button
              text="SUBMIT"
              className="button button-add-to-cart"
              onClick={() => {
                handleSignIn(email, password);
              }}
            ></Button>
            <Button
              text="LOGIN WITH GOOGLE"
              className="button button-login-google"
              onClick={() => {
                handleLoginWithGoogle();
              }}
            >
              <GoogleSVG></GoogleSVG>
            </Button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="form-container">
            <p className="warning-message">{warning}</p>
            <Input
              name="name"
              type="text"
              placeholder="name"
              onChange={(e) => {
                setUserName(e.currentTarget.value);
              }}
            />
            <Input
              name="email"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
            <Input
              name="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
            <Input
              name="confirm-password"
              type="password"
              placeholder="password"
              onChange={(e) => {
                setConfirmPassword(e.currentTarget.value);
              }}
            />
            <Button
              text="SUBMIT"
              className="button button-submit"
              onClick={() => {
                handleSignUp(email, password, userName);
              }}
            ></Button>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
