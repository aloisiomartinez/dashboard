import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import List from '../List';
import * as S from './styles';

const Dashboard: React.FC = () => {
  const options = [
    {
      value: 'Rodrigo',
      label: 'Rodrigo',
    },
    {
      value: 'Rodrigo',
      label: 'Rodrigo',
    },
    {
      value: 'Rodrigo',
      label: 'Rodrigo',
    },
  ];
  return (
    <S.Container>
      <ContentHeader title='Dashboard' lineColor='#FFF'>
        <SelectInput options={options} />
      </ContentHeader>
    </S.Container>
  );
};

export default Dashboard;
