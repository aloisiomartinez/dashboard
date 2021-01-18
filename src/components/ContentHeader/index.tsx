import React from 'react';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

const ContentHeader: React.FC = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default ContentHeader;