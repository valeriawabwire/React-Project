import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import "./App.css";
import PeopleList from './Components/PeopleList.js';
import FormPage from './Components/FormPage';
import WelcomePage from './Components/WelcomePage';
import ProfilePage from './Components/ProfilePage'; 
import PeopleItem from './Components/PeopleItem'; 
import ProfilePic from './Components/ProfilePic'; 
import ParentComponent from './Components/ParentComponent.js';

function App() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/people');
        const data = await response.json();
        setPeople(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false after a minimum delay of 5 seconds
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    };

    fetchData(); // Call fetchData immediately when component mounts
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <Router>
      <div className="App">
        {/* Render load-container if loading is true */}
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
            <Route path="/peopleitem" element={<PeopleItem />} />
            {/* Pass people data to PeopleList component */}
            <Route path="/peoplelist" element={<PeopleList people={people} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;