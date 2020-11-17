import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
 
import GlobalStyle from './styles/global';

import AppProvider from './hooks/Index';

import Routes from './routes';

function App() {
  return (
    <Router>
      <AppProvider>
          <Routes></Routes>
      </AppProvider>

      <GlobalStyle></GlobalStyle>
    </Router>
  );
}

export default App;
