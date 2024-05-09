
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './FormPage.css'; // Import CSS file for styling

function FormPage() {
    const [promotionalEmails, setPromotionalEmails] = useState(true); // State for promotional emails checkbox
    const navigate = useNavigate(); // Initialize useNavigate

    const handleCheckboxChange = () => {
        setPromotionalEmails(!promotionalEmails); // Toggle the state when the checkbox is clicked
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isConfirmed = window.confirm("Would you like to save your information on the app?");
        if (isConfirmed) {
            // Logic to save the information
            console.log("Information saved!");
            navigate('/welcome'); // Navigate to the welcome page
        }
    };

    return (
        <div>
            <div className="background-image"></div>
            <div className="form-container">
                <h2>Sign In Form</h2>
                <form onSubmit={handleSubmit} className="sign-in-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={promotionalEmails}
                                onChange={handleCheckboxChange}
                            />
                            I don't want to receive promotional emails from LoveTube
                        </label>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                <Link to="/profile" className="back-button">Back to Home</Link> 
            </div>
        </div>
    );
}

export default FormPage;