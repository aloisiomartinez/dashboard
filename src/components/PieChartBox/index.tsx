import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import * as S from './styles';

const PieChartBox: React.FC = () => (
  <S.Container>
    <S.SideLeft>
      <h2>Relação</h2>
      <S.LegendContainer>
        <S.Legend color='#F7931B'>
          <div>5%</div>
          <span>Entradas</span>
        </S.Legend>
        <S.Legend color='#E44C4E'>
          <div>95%</div>
          <span>Saídas</span>
        </S.Legend>
        <S.Legend color='#E44C4E'>
          <div>95%</div>
          <span>Saídas</span>
        </S.Legend>
        <S.Legend color='#E44C4E'>
          <div>95%</div>
          <span>Saídas</span>
        </S.Legend>
        <S.Legend color='#E44C4E'>
          <div>95%</div>
          <span>Saídas</span>
        </S.Legend>
      </S.LegendContainer>
    </S.SideLeft>

    <S.SideRight>
      {/* <ResponsiveContainer>
      <PieChart>
        <Pie data={{amount: 30, percent: 95}} labelLine={false} dataKey="percent">

        </Pie>
      </PieChart>
    </ResponsiveContainer> */}
    </S.SideRight>
  </S.Container>
);

export default PieChartBox;
