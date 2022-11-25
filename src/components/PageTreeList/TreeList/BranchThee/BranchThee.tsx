import React from 'react';
import { dataHost } from '../../../../constants/host';
import { PropsBranchThee } from '../../../../Interfaces/Interfaces';
import s from './BranchThee.module.css';

export const BranchThee = ({ onClickImageModal, elementCategories }: PropsBranchThee) => (
  <div className={`${s.item} ${s.hoverImg}`}>
    <span className={s.text}>
      {`${dataHost}${elementCategories.image}`}
    </span>
    <img
      role="presentation"
      className={s.spanImg}
      onClick={() => onClickImageModal(
        elementCategories.image,
        elementCategories.id,
      )}
      src={`${dataHost}${elementCategories.image}`}
      alt="изображение из категории, на которое надо нажать"
    />
  </div>

);
