import React from 'react';

import * as S from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = () => {
  return (
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content />
    </S.Grid>
  );
};

export default Layout;
