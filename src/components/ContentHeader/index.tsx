import React from 'react';

import logoImg from '../../assets/logo.svg';
import SelectInput from '../SelectInput';

import * as S from './styles';

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

// eslint-disable-next-line react/prop-types
const ContentHeader: React.FC<IContentHeaderProps> = ({ title, lineColor, children }) => {
  return (
    <S.Container>
      <S.TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </S.TitleContainer>
      <S.Controllers>{children}</S.Controllers>
    </S.Container>
  );
};

export default ContentHeader;
