import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import "./App.css";
import PeopleList from './Components/PeopleList.js';
import FormPage from './Components/FormPage';
import WelcomePage from './Components/WelcomePage';
import ProfilePage from './Components/ProfilePage';
import Match from './Components/Match.js';
import ProfilePic from './Components/ProfilePic';
import ParentComponent from './Components/ParentComponent.js';

function App() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [likedPeople, setLikedPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/people');
        const data = await response.json();
        setPeople(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    const timeout = setTimeout(() => {
      fetchData();
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleLikedPerson = (person) => {
    setLikedPeople([...likedPeople, person]);
  };
  const handleRemovePerson = (personToRemove) => {
    setLikedPeople(likedPeople.filter(person => person !== personToRemove));
  };
  return (
    <Router>
      <div className="App">
    <Match selectedPeople={likedPeople} onRemove={handleRemovePerson}/>
        {loading ? (
          <div className='load-container'>LOVETUBE</div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profilepic" element={<ProfilePic />} />
            <Route path="/parentcomponent" element={<ParentComponent />} />

            <Route path="/peoplelist" element={<PeopleList people={people} onSelect={handleLikedPerson} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
