import React from 'react';
import './Input.scss';

interface IpropsInput {
  name?: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (FC: unknown) => void;
}

export const Input = (props: IpropsInput) => {
  return (
    <div className="input-container">
      {props.name && <label htmlFor="input">{props.name}</label>}
      <input {...props} className="input" />
    </div>
  );
};
