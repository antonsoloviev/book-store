import React, { useState, useRef, MutableRefObject } from 'react';
import Button from '../Buttons/Button';

import './Subscribe.scss';

function Subscribe() {
  const [message, setMessage] = useState('');

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const onSubscribe = () => {
    const input = inputRef.current;
    setMessage(input.value);
    input.value = '';
  };

  return (
    <section className="subscribe">
      <h2>SUBSCRIBE TO NEWSLETTER</h2>
      <p className="subscribe-subtitle">
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </p>
      <div className="subscribe-bottom">
        <input type="email" ref={inputRef} />
        <Button
          text="SUBSCRIBE"
          className="button button-subscribe"
          onClick={onSubscribe}
        ></Button>
      </div>
      {message && (
        <p className="subscribe-message">
          Thank you for subscribe! Your email "{message}" successfully added
        </p>
      )}
    </section>
  );
}

export default Subscribe;
