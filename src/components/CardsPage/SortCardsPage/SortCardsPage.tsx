import React, { useState } from 'react';
import s from './SortCardsPage.module.css';
import { sortData, valueSortCard } from '../../../constants/sort-card';
import { Button } from '../../Buttons/Button';
import RadioButton from '../../RadioButton/RadioButton';
import { ICard, IRepoKeys, PropsSortCardsPage } from '../../../Interfaces/Interfaces';

export const SortCardsPage = ({
  onAddAllCards, onShowDeletedCards, removeShowDeletedCards, quantityPosts, setCards, onBackToCards,
}: PropsSortCardsPage) => {
  const [sortMethod, setSortMethod] = useState(valueSortCard.category);

  const handleSortPost = (sort: IRepoKeys) => {
    setSortMethod(sort);
    setCards((prevPosts: ICard[]) => {
      const newPosts = [...prevPosts]; 
      const sortFunction = sort === valueSortCard.category
        ? (a: ICard, b: ICard) => ((a[sort]) as string).localeCompare((b[sort]) as string)
        : (a: ICard, b: ICard) => (a[sort] > b[sort] 
          ? -1 
          : b[sort] > a[sort] 
            ? 1 
            : 0);
      return newPosts.sort(sortFunction);
    });
  };

  return (
    <div className={s.container}>
      <RadioButton
        onChange={handleSortPost}
        sortMethod={sortMethod}
        onSortData={sortData}
      />
      <div className={s.buttons}>
        <Button
          onClick={onBackToCards}
        >
          Вернуться к карточкам
        </Button>

        <Button
          onClick={onAddAllCards}
        >
          добавить все карточки

        </Button>

        <Button
          onClick={onShowDeletedCards}
        >
          Корзина

        </Button>

        <Button
          onClick={removeShowDeletedCards}
        >
          Очистить корзину

        </Button>

      </div>
      <span className={s.quantity}>
        кол-во изображений:
        <span className={s.coutPosts}>
          {' '}
          {quantityPosts}
        </span>
      </span>
    </div>
  );
};
