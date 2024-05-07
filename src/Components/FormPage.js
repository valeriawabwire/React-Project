import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './FormPage.css'; // Import CSS file for styling

function FormPage() {
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
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                <Link to="/" className="back-button">Back to Home</Link> {/* Link to the home page */}
            </div>
        </div>
    );
}

export default FormPage;