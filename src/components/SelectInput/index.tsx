import React from 'react';

import * as S from './styles';

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

// eslint-disable-next-line react/prop-types
const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <S.Container>
      <select>
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </S.Container>
  );
};

export default SelectInput;
