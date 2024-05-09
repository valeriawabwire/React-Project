import React, { useState } from 'react';
import './PeopleItem.css';

function PeopleItem({ name, age, gender, location, interests, preferences, imageSrc }) {
    const [showDetails, setShowDetails] = useState(false);
    const [showMessageForm, setShowMessageForm] = useState(false);
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        alert("Message sent!")
        console.log('Sending message:', message);
        setShowMessageForm(false);
    };

    const handleLike = () => {
        alert("Liked!"); // Implement actual like logic here
    };

    return (
        <div className='big-Container'>
            <div className="card">
                <img src={imageSrc} className="card-img-top" alt="Profile" />
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
            <button onClick={handleLike} className="like-button">❤️</button>

        </div>
    );
}

export default PeopleItem;