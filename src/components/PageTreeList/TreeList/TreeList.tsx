import React from 'react';
import { ICard, IMainBranch } from '../../../Interfaces/Interfaces';
import { BranchThee } from './BranchThee/BranchThee';
import s from './TreeList.module.css';

interface PropsTreeList {
  onAddTree: CallableFunction;
  onClickImageModal: CallableFunction;
  elementArray: IMainBranch;
}

export const TreeList = ({ onAddTree, onClickImageModal, elementArray }: PropsTreeList) => (
  <div className={s.item}>
    <div
      onClick={() => onAddTree(elementArray.category)}
      className={`${s.list} ${s.category}`}
      role="presentation"
    >
      {elementArray.category}
    </div>
    <div className={s.list}>
      { elementArray.bool && elementArray.nestedValues.map((elementCategories: ICard) => (
        <BranchThee
          key={elementCategories.id}
          onClickImageModal={onClickImageModal}
          elementCategories={elementCategories}
        />
      ))}
    </div>
  </div>
);
