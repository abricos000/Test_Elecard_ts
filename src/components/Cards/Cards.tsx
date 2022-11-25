import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Card } from './Card/Card';
import s from './Сards.module.css';
import './Сards.css';
import { ICard, PropsCards } from '../../Interfaces/Interfaces';

export const Cards = ({ postList, onClose }: PropsCards) => (
  <TransitionGroup className={s.cards}>
    {postList.map((post: ICard) => (
      <CSSTransition
        key={post.id}
        timeout={300}
        classNames="card"
      >
        <Card onRemove={onClose} post={post} />
      </CSSTransition>
    ))}
  </TransitionGroup>

);
