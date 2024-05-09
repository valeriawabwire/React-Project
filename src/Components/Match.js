import React from 'react';
import './Match.css';

function Match({ selectedPeople,onRemove}) {
  const handleCardClick = (person) => {
    onRemove(person);}
  return (
    <div className='Match'>
      <h2>Liked People</h2>
      <div className="liked"></div>
      {selectedPeople.map((person) => (
      <div key={person.id} onClick={() => handleCardClick(person)} className="liked-person">
        
          <img src="" className="card-img-top" alt="..." />
          <h3>{person.name}</h3>
          <p>Age:{person.age}</p>
          <p>Gender:{person.gender}</p>
          <p>Location: {person.location}</p>
       
        </div>

      ))}
    </div>
  );
}

export default Match;
