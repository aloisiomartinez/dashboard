import React from 'react';
// Libera os temas da aplicação disponíveis para todos os componentes
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
