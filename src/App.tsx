import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginAndSignUp from './Components/UserAuth/LoginAndSignUp';
import Header from './Components/Header';

function App() {
  return (
    <><Header />
    <LoginAndSignUp />
    </>
  );
}

export default App;
