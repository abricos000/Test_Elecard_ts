import { ICard } from "../Interfaces/Interfaces";

export const getRemovedCardList = () => {
  try {
    return JSON.parse((localStorage.getItem('myKey') as string)) || [];
  } catch {
    console.error('Не удалось получить список удалённых карточек');
    return [];
  }
};

export const setRemovedCard = (post: ICard) => {
  const prevList = getRemovedCardList();
  localStorage.setItem('myKey', JSON.stringify([...prevList, post]));
};

export const clearRemovedCards = () => {
  localStorage.removeItem('myKey');
};
