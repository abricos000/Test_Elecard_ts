import React from 'react';
import { PropsButton } from '../../Interfaces/Interfaces';
import s from './Button.module.css';

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
