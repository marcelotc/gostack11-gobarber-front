import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn></SignIn>
      </AuthProvider>

      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
