import React from 'react';
import Button from '../Button/Button';

import './Subscribe.scss';

function Subscribe() {
  return (
    <section className="subscribe">
      <h2>SUBSCRIBE TO NEWSLETTER</h2>
      <p>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </p>
      <div className="subscribe-bottom">
        <input type="text" />
        <Button text="SUBSCRIBE" className="button button-subscribe"></Button>
      </div>
    </section>
  );
}

export default Subscribe;
