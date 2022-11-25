import React from 'react';
import { PropsFooter } from '../../Interfaces/Interfaces';
import s from './Footer.module.css';

export const Footer = ({ children }: PropsFooter) => (
  <footer className={s.footerContent}>
    {children}
  </footer>
);
