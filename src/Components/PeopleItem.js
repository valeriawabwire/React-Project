import React, { useState } from 'react';
import './PeopleItem.css';

function PeopleItem({ name, age, gender, location, interests, preferences, onSelect }) {
    const [showDetails, setShowDetails] = useState(false);
    const [showMessageForm, setShowMessageForm] = useState(false);
    const [message, setMessage] = useState('');

    const handleSelect = () => {
        const selectedPerson = { name, age,gender,location,interests,preferences};
        onSelect(selectedPerson);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        console.log('Sending message:', message);
        
        setShowMessageForm(false); 
    };

    return (
        <div className="card" style={{width: '18rem'}}>
            <button onClick={handleSelect} className="like-button">Like</button>
            <button className="pass-button">Pass</button>
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {showDetails && (
                    <p className="card-text">
                        Age: {age} <br />
                        Gender: {gender} <br />
                        Location: {location} <br />
                        Interests: {Array.isArray(interests) ? interests.join(', ') : 'No interests specified'} <br />
                        Preferences: {Array.isArray(preferences) ? preferences.join(', ') : 'No preferences specified'}
                    </p>
                )}
                <button onClick={() => setShowDetails(!showDetails)} className="btn btn-primary">
                    {showDetails ? 'Hide Details' : 'View Details'}
                </button>
                <button onClick={() => setShowMessageForm(true)} className="btn btn-primary">Message</button>
                {showMessageForm && (
                    <div>
                        <textarea value={message} onChange={handleMessageChange} placeholder="Type your message here..." />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PeopleItem;
