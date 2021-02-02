import React, { InputHTMLAttributes } from 'react';

import * as S from './styles';

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Input: React.FC<IInputProps> = ({ ...rest }) => <S.Container {...rest} />;

export default Input;
