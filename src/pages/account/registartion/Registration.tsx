import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import { Form } from '../form/Form';
import { Input } from '../input/Input';

import './Registration.scss';

export const Registration = () => {
  const nav = useNavigate();
  const [tabIndex, setTabIndex] = useState(1);

  const [state, setState] = useState({
    isDefaultAvatar: false,
    isEditMode: false,
    password: '',
    email: '',
    name: '',
    isAuthorized: false
  });

  const handleSubmit = () => {
    setState((prevState) => ({
      ...prevState,
      isAuthorized: true
    }));
    // eslint-disable-next-line no-console, no-undef
    console.log('state', state);
    // eslint-disable-next-line no-console, no-undef
    console.log('REGISTRATION COMPLETE');
  };

  const handleChange = (event: any) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  useEffect(() => {
    if (state.isAuthorized) {
      nav('/success');
    }
  }, [nav, state.isAuthorized]);

  return (
    <div className="registration">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SIGN IN</Tab>
          <Tab>SIGN UP</Tab>
        </TabList>
        <TabPanel>
          <Form onSubmit={handleSubmit} name="sign-up" action="" method="">
            <Input
              name="email"
              type="email"
              placeholder="email"
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              placeholder="password"
              onChange={handleChange}
            />
            <Input type="submit" value="SUBMIT" />
          </Form>
        </TabPanel>
        <TabPanel>
          <Form onSubmit={handleSubmit} name="sign-up" action="" method="">
            <Input
              name="name"
              type="text"
              placeholder="name"
              onChange={handleChange}
            />
            <Input
              name="email"
              type="email"
              placeholder="email"
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              placeholder="password"
              onChange={handleChange}
            />
            <Input
              name="confirm-password"
              type="password"
              placeholder="password"
              onChange={handleChange}
            />
            <Input type="submit" value="SUBMIT" />
          </Form>
        </TabPanel>
      </Tabs>
    </div>
  );
};
