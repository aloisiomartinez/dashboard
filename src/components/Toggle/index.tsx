import React, { useState } from 'react';

import * as S from './styles';

const Toggle: React.FC = () => {
  const [online, setOnline] = useState(false);

  return (
    <S.Container>
      <S.ToggleLabel>Light</S.ToggleLabel>
      <S.ToggleSelector checked={online} uncheckedIcon={false} checkedIcon={false} onChange={() => setOnline(!online)} />
      <S.ToggleLabel>Dark</S.ToggleLabel>
    </S.Container>
  );
};

export default Toggle;
