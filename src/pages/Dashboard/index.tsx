import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';

import * as S from './styles';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear() - 1);

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

  const totalGains = useMemo(() => {
    let total = 0;

    gains.forEach(item => {
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

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalExpenses, totalGains]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês, você gastou mais do que deveria.',
        footerText: 'Verifique seus gastos e tente cortar algumas coisas desnecessárias',
        icon: sadImg,
      };
    }
    if (totalBalance <= 1) {
      return {
        title: 'Ufaa!',
        description: 'Neste mês, você gastou exatamente o que ganhou.',
        footerText: 'Tenha cuidado. No próximo mês tente poupar o seu dinheiro',
        icon: grinningImg,
      };
    }
    return {
      title: 'Muito bem!',
      description: 'Sua carteira está positiva!',
      footerText: 'Continue assim! Considere investir seu dinheiro.',
      icon: happyImg,
    };
  }, [totalBalance]);

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
        <WalletBox
          title='Saldo'
          color='#4E41F0'
          amount={totalBalance}
          footerLabel='atualizado com base nas entradas e saídas '
          icon='dolar'
        />
        <WalletBox
          title='Entradas'
          color='#F7931B'
          amount={totalGains}
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

        <MessageBox title={message.title} description={message.description} footerText={message.footerText} icon={message.icon} />

        <PieChartBox />
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;
