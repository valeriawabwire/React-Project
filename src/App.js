import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import "./App.css";
import PeopleList from './Components/PeopleList.js';
import FormPage from './Components/FormPage';
import WelcomePage from './Components/WelcomePage';
import ProfilePage from './Components/ProfilePage'; 
import Match from './Components/Match.js';
import PeopleItem from './Components/PeopleItem.js';

function App() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([])

  const [likedPeople, setLikedPeople] = useState([])


  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    

    return () => clearTimeout(timeout);
  }, []);


  useEffect(() => {
    fetch('http://localhost:8000/people')
    .then(res => res.json())
    .then(data => {setPeople(data)})
  }, [])
  
  const handleLikedPerson = (person) => {
    setLikedPeople([...likedPeople, person]);
  };
  

  return(
    <Router>
      <div className="App">
        <h3>
          <center>Dating APP</center>
        </h3>
        <Match selectedPeople={likedPeople} />
        <PeopleList people={people} onSelect={handleLikedPerson} /> 
        {loading ? (
          <div className='load-container'>LOVETUBE</div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/profile" element={<ProfilePage />} /> 
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
