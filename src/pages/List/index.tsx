import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import * as S from './styles';

const List: React.FC = () => {
  const months = [
    {
      value: 7,
      label: 'Julho',
    },
    {
      value: 8,
      label: 'Agosto',
    },
    {
      value: 9,
      label: 'Setembro',
    },
  ];

  const years = [
    {
      value: 2020,
      label: 2020,
    },
    {
      value: 2019,
      label: 2019,
    },
    {
      value: 2018,
      label: 2018,
    },
  ];
  return (
    <S.Container>
      <ContentHeader title='Saidas' lineColor='#E44C4E'>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <S.Filters>
        <button type='button' className='tag-filter tag-filter-recurrent'>
          Recorrentes
        </button>

        <button type='button' className='tag-filter tag-filter-eventual'>
          Eventuais
        </button>
      </S.Filters>

      <S.Content>
        <HistoryFinanceCard tagColor='#E44C4E' title='Conta de Luz' subTitle='27/07/2020' amount='R$ 130,00' />
      </S.Content>
    </S.Container>
  );
};

export default List;
