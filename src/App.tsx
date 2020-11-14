import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

function App() {
  return (
  <>
    <AuthContext.Provider value={{ name: 'Marcelo' }}>
      <SignIn></SignIn>
    </AuthContext.Provider>

    <GlobalStyle></GlobalStyle>
  </>
  );
}

export default App;
