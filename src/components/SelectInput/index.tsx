import React from 'react';

import * as S from './styles';

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => (
  <S.Container>
    <select>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </S.Container>
);

export default SelectInput;
