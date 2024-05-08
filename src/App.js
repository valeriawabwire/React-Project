import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import "./App.css";
import PeopleItem from './Components/PeopleItem';
import FormPage from './Components/FormPage';
import WelcomePage from './Components/WelcomePage';
import ProfilePage from './Components/ProfilePage';

function App() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([])


  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);


    return () => clearTimeout(timeout);
  }, []);


  useEffect(() => {
    fetch('http://localhost:8000/people').then(res => res.json()).then(data => {
      setPeople(data)
    })
  })
  return (


    <Router>
      <div className="App">
        <h3>
          <center>Dating APP</center>
        </h3>
        {/* <PeopleList people={people} /> */}
        {loading ? (
          <div className='load-container'>LOVETUBE</div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/profile" element={<ProfilePage />} /> 
            <Route path="/people" element={<PeopleItem />} />
          </Routes>
        )}
      </div>
    </Router>

  )
}

export default App;