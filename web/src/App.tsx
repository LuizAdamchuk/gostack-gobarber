import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppContextProvider } from './context';
import { Routes } from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <Routes />
        </AppContextProvider>

        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};

export default App;
