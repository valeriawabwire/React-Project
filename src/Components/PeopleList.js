import React, { useState, useEffect } from 'react';
import PeopleItem from './PeopleItem';

function PeopleList() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        const fetchedPeople = [
            { id: 1, name: "Liz", age: 21, gender: "Female", location: "Nairobi", interests: "Reading", preferences: "Movies" },
            // Add more people as needed
        ];
        setPeople(fetchedPeople);
    }, []);

    return (
        <div>
            {people.map(person => (
                <PeopleItem
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    gender={person.gender}
                    location={person.location}
                    interests={person.interests}
                    preferences={person.preferences}
                />
            ))}
        </div>
    );
}

export default PeopleList;
