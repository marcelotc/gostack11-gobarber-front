import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn></SignIn>
      </AuthProvider>

      <ToastContainer></ToastContainer>

      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
