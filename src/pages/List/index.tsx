import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import * as S from './styles';

const List: React.FC = () => {
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
      <ContentHeader title='Saidas' lineColor='#E44C4E'>
        <SelectInput options={options} />
      </ContentHeader>

      <S.Content>
        <HistoryFinanceCard cardColor='#313862' tagColor='#E44C4E' title='Conta de Luz' subTitle='27/07/2020' amount='R$ 130,00' />
      </S.Content>
    </S.Container>
  );
};

export default List;
