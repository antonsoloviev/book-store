import React from 'react';

import './Button.scss';

export interface ButtonProps {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  children,
  onClick
}) => {
  return (
    <button onClick={onClick} className={className}>
      {children} {text}
    </button>
  );
};

export default Button;
