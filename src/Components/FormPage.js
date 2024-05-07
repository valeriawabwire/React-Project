import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './FormPage.css'; // Import CSS file for styling

function FormPage() {
    const [promotionalEmails, setPromotionalEmails] = useState(true); // State for promotional emails checkbox

    const handleCheckboxChange = () => {
        setPromotionalEmails(!promotionalEmails); // Toggle the state when the checkbox is clicked
    };

    return (
        <div>
            <div className="background-image"></div>
            <div className="form-container">
                <h2>Sign In Form</h2>
                <form className="sign-in-form">
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
                    <Link to="/welcome" className="submit-button">Submit</Link> {/* Link to the welcome page */}
                </form>
                <Link to="/" className="back-button">Back to Home</Link> {/* Link to the home page */}
            </div>
        </div>
    );
}

export default FormPage;

