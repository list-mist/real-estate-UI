import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginAndSignUp from './Components/UserAuth/LoginAndSignUp';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <><Header />
    <LoginAndSignUp />
     {/* <LandingPage/> */}
    </>
  );
}

export default App;
