import { ICard } from "../Interfaces/Interfaces";

export const getCardList = () => {
  try {
    return JSON.parse((localStorage.getItem('myKeyCards') as string)) || [];
  } catch {
    console.error('Не удалось получить список удалённых карточек');
    return [];
  }
};

export const setCardList = (post: ICard[]) => {
  localStorage.setItem('myKeyCards', JSON.stringify(post));
};

export const clearCards = () => {
  localStorage.removeItem('myKeyCards');
};
