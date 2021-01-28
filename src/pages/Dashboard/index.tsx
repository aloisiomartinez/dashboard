import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';

import happyImg from '../../assets/happy.svg';

import List from '../List';
import * as S from './styles';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear() - 1);

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

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const years = useMemo(() => {
    const uniqueYears: number[] = [];

    [...expenses, ...gains].forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const totalExpenses = useMemo(() => {
    let total = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error('Invalid amount! Amount must be number.');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error('invalid month value. Is accept 0 - 12.');
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error('invalid year value.');
    }
  };

  return (
    <S.Container>
      <ContentHeader title='Dashboard' lineColor='#F7931B'>
        <SelectInput options={months} onChange={e => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />
        <SelectInput options={years} onChange={e => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
      </ContentHeader>

      <S.Content>
        <WalletBox title='Saldo' color='#4E41F0' amount={5000.0} footerLabel='atualizado com base nas entradas e saídas ' icon='dolar' />
        <WalletBox
          title='Entradas'
          color='#F7931B'
          amount={5000.0}
          footerLabel='atualizado com base nas entradas e saídas '
          icon='arrowUp'
        />
        <WalletBox
          title='Saídas'
          color='#E44C4E'
          amount={totalExpenses}
          footerLabel='atualizado com base nas entradas e saídas '
          icon='arrowDown'
        />

        <MessageBox
          title='Muito bem'
          description='Sua carteira está positiva'
          footerText='Continue Assim. Considere investir seu saldo'
          icon={happyImg}
        />
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
