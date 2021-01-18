import React from 'react';

import * as S from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

// eslint-disable-next-line react/prop-types
const Layout: React.FC = ({ children }) => {
  return (
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </S.Grid>
  );
};

export default Layout;
