import React from 'react';

import './Button.scss';

export type ButtonProps = {
  text: string;
  className: string;
};

function Button(props: ButtonProps) {
  return <button className={props.className}>{props.text}</button>;
}

export default Button;
