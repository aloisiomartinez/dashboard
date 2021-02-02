import React from 'react';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

import * as S from './styles';

const Content: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <S.Container>
      <S.Header>
        <S.LogImg src={logoImg} alt='Logo Minha Carteira' />
        <S.Title>Minha Carteira</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href='/'>
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>
        <S.MenuItemLink href='/list/entry-balance'>
          <MdArrowUpward />
          Entradas
        </S.MenuItemLink>
        <S.MenuItemLink href='/list/exit-balance'>
          <MdArrowDownward />
          Saidas
        </S.MenuItemLink>
        <S.MenuItemButton onClick={signOut}>
          <MdExitToApp /> Sair
        </S.MenuItemButton>
      </S.MenuContainer>
    </S.Container>
  );
};

export default Content;
