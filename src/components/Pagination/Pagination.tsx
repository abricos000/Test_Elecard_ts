import React from 'react';
import { IPageNumber, PropsPagination } from '../../Interfaces/Interfaces';
import s from './Pagination.module.css';


export const Pagination = ({ onPaginate, pageNumbers }: PropsPagination) => (
  <div>
    <div className={s.list}>
      {pageNumbers.map((element: IPageNumber) => (
        <span
          role="presentation"
          onClick={() => onPaginate(element.number)}
          key={element.number}
          className={`${s.item} ${element.status ? s.active : ' '}`}
        >
          {element.number}
        </span>
      ))}
    </div>
  </div>
);
