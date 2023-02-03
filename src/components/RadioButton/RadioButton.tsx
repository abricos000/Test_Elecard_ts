import React from 'react';
import s from './RadioButton.module.css';

interface IOption {
  value: string;
  name: string;
}
interface PropsRadioButton {
  onSortData: IOption [];
  onChange: CallableFunction;
  sortMethod: string;
}

const RadioButton = ({ onSortData, onChange, sortMethod }: PropsRadioButton) => (
  <div className={s.radioBtns}>
    <span className={s.sorText}>Сортировка по:</span>
    {onSortData.map((option: IOption) => (
      <p className={s.radioInput} key={option.value}>
        <label>
          <input
            type="radio"
            name="sort"
            checked={sortMethod === option.value}
            onChange={() => onChange(option.value)}
          />
          {' '}
          {option.name}
        </label>
      </p>
    ))}
  </div>
);
export default RadioButton;
