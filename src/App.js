import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';



function App() {
  const [people, setPeople] =useState([])

  useEffect(()=>{
    fetch('http://localhost:8000/people').then(res=>res.json()).then(data=>{
      setPeople(data)
    })
  })
  return (
    <div>
      <h2>
        Dating APP
      </h2>
    </div>
  );
}

export default App;
