import React from 'react';
import s from './Button.module.css';

interface PropsButton {
  children: string;
  onClick: CallableFunction;
}

export const Button = ({ children, onClick }: PropsButton) => (
  <button
    disabled={false}
    type="button"
    onClick={() => onClick()}
    className={s.btn}
  >
    {children}
  </button>
);
