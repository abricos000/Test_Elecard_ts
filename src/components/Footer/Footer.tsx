import React from 'react';
import s from './Footer.module.css';

interface PropsFooter {
  children: string;
}

export const Footer = ({ children }: PropsFooter) => (
  <footer className={s.footerContent}>
    {children}
  </footer>
);
