import React, { useMemo } from 'react';

import emojis from '../../utils/emojis';

import * as S from './styles';

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length); // Total do array de  Emojis (0 - 6)
    return emojis[indice];
  }, []);

  return (
    <S.Container>
      <h1>Toogle</h1>
      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Aloisio Martinez</S.UserName>
      </S.Profile>
    </S.Container>
  );
};

export default MainHeader;
