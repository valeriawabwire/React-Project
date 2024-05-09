import React from 'react';
import './Match.css';

function Match({ selectedPeople,onRemove}) {
  const handleCardClick = (person) => {
<<<<<<< HEAD
    onRemove(person.id);}
=======
    onRemove(person);}
>>>>>>> refs/remotes/origin/master
  return (
    <div className='Match'>
      <h2>Liked People</h2>
      <div className="liked"></div>
      {selectedPeople.map((person) => (
      <div key={person.id} onClick={() => handleCardClick(person)} className="liked-person">
        
<<<<<<< HEAD
          <img src={person.image} className="card-img-top" alt="..." />
=======
          <img src="" className="card-img-top" alt="..." />
>>>>>>> refs/remotes/origin/master
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
