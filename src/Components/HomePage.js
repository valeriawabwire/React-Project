import React from 'react';
import "./HomePage.css";
import luv from "../Assets/luv.jpg";
import { Link } from 'react-router-dom';

function HomePage() {
    const backgroundImageStyle = {
        backgroundImage: `url(${luv})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Set height to cover the whole page
    };

    return (
        <div className='homeContainer' style={backgroundImageStyle}>
            <h1 className='h1'>WELCOME TO LOVETUBE</h1>
            <Link to="/profile">
                <button className="sign-in-button">Sign In</button>
            </Link>

        </div>
    );
}

export default HomePage;