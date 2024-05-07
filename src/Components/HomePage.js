import React from 'react';
import "./HomePage.css";
import pic from "../Assets/pic.jpg";
import { Link } from 'react-router-dom';

function HomePage() {
    const backgroundImageStyle = {
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Set height to cover the whole page
    };

    return (
        <div className='home-container' style={backgroundImageStyle}>
            <h1 className='h1'>WELCOME TO LOVETUBE</h1>
            <Link to="/form">
            <button className="sign-in-button">Sign In</button>
            </Link>
        </div>
    );
}

export default HomePage;