import React from 'react';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

interface IHistoryFinanceCardProps {
  cardColor: string;
  tagColor: string;
  title: string;
  subTitle: string;
  amount: string;
}

// eslint-disable-next-line react/prop-types
const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({ cardColor, tagColor, title, subTitle, amount }) => {
  return (
    <S.Container color={cardColor}>
      <S.Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subTitle}</small>
      </div>
      <h3>{amount}</h3>
    </S.Container>
  );
};

export default HistoryFinanceCard;
