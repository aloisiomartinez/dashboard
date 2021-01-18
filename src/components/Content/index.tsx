import React from 'react';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

// eslint-disable-next-line react/prop-types
const Content: React.FC = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Content;
