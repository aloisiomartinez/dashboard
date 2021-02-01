import React, { useMemo, useState } from 'react';

import Toggle from '../Toggle';
import emojis from '../../utils/emojis';

import { useTheme } from '../../hooks/theme';

import * as S from './styles';

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark ');

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length); // Total do array de  Emojis (0 - 6)
    return emojis[indice];
  }, []);

  return (
    <S.Container>
      <Toggle labelLeft='Light' labelRight='Dark' checked={darkTheme} onChange={handleChangeTheme} />
      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Aloisio Martinez</S.UserName>
      </S.Profile>
    </S.Container>
  );
};

export default MainHeader;
