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
// Import ProfilePic component

function App() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/people');
        const data = await response.json();
        setPeople(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    const timeout = setTimeout(() => {
      fetchData();
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <div className="App">
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
            <Route path="/peoplelist" element={<PeopleList people={people} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;