//import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes as well

import FormPage from './Components/FormPage';

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<HomePage />} /> 
        <Route path="/form" element={<FormPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;