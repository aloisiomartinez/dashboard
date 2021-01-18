import React from 'react';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

// eslint-disable-next-line react/prop-types
const ContentHeader: React.FC = ({ children }) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <h1>Titulo</h1>
      </S.TitleContainer>
      <S.Controllers>
        <button type='button'>Botao A</button>
        <button type='button'>Botao B</button>
      </S.Controllers>
    </S.Container>
  );
};

export default ContentHeader;
