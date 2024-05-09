import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

// Import your background image
import backgroundImage from '../Assets/backgroundimage.avif';

function HomePage() {
  // Define background image style
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="home-container" style={backgroundStyle}>
      <h1 className='h1'>Welcome to LoveTube!</h1>
      <Link to="/form">
        <button className="sign-in-button">Sign In</button>
      </Link>
    </div>
  );
}

export default HomePage;
