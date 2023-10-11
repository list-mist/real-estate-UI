import './App.css';
import LoginAndSignUp from './Components/UserAuth/LoginAndSignUp';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Property from './Components/Properties/Property';
import { propertyData } from './Components/API/User';
import HomePage from "./Components/LandingPage/HomePage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginAndSignUp />} />
        <Route path="/property" element={<Property prop={propertyData} />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
