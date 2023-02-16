import React from 'react';
import './Form.scss';

interface IpropsForm {
  name: string;
  method: string;
  action: string;
  onSubmit: () => void;
  children: any;
}

export const Form = (props: IpropsForm) => {
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit();
  };

  const { children, method, name, action } = props;
  return (
    <form
      onSubmit={handleSubmitForm}
      method={method}
      action={action}
      name={name}
      className="form"
    >
      <div className="form__container">{children}</div>
    </form>
  );
};
