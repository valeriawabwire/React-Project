import React, { useState } from 'react';
import './PeopleItem.css';

function PeopleItem({ name, age, gender, location, interests, preferences, imageSrc,onSelect }) {
    const [showDetails, setShowDetails] = useState(false);
    const [showMessageForm, setShowMessageForm] = useState(false);
    const [message, setMessage] = useState('');

    const handleLike = () => {
        const selectedPerson = { name, age, gender, location, interests, preferences };
        onSelect(selectedPerson);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        alert("Message sent!")
        console.log('Sending message:', message);
        setShowMessageForm(false);
    };

    
    return (
        <div className='big-Container'>
            <div className='card-text'>
                <p className="p-detail">
                    Age: {age} <br />
                    Gender: {gender} <br />
                    Location: {location} <br />
                    Interests: {interests} <br />
                    Preferences: {preferences}
                </p>
            </div>
            <div className="card">
                <h5 className="card-title">{name}</h5>
                <img src={imageSrc} className="card-img-top" alt="Profile" />
                <div className="card-body">
                    <button onClick={() => setShowMessageForm(true)} className="btn btn-primary">Message</button>
                    {showMessageForm && (
                        <div>
                            <textarea value={message} onChange={handleMessageChange} placeholder="Type your message here..." />
                            <button onClick={sendMessage}>Send</button>
                        </div>
                    )}

                </div>
            </div>
            <button onClick={handleLike} className="like-button">❤️</button>


        </div>
    );
}

export default PeopleItem;
