import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/Index';

function App() {
  return (
    <>
      <AppProvider>
        <SignIn></SignIn>
      </AppProvider>

      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
