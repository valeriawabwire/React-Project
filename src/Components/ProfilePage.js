import React, { useState } from 'react';
import './ProfilePage.css'; // Import CSS file for styling

function ProfilePage() {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        monthOfBirth: '',
        yearOfBirth: '',
        gender: '',
        country: '',
        city: '',
        desiredGender: '',
        relationshipType: '',
        minAgeGap: '',
        maxAgeGap: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="profile-container">
            <h2 className="profile-title">Profile Page</h2>
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <div className="dob-inputs">
                        
                        <input type="number" name="dateOfBirth" placeholder="Day" value={formData.dateOfBirth} onChange={handleChange} />
                        <input type="number" name="monthOfBirth" placeholder="Month" value={formData.monthOfBirth} onChange={handleChange} />
                        <input type="number" name="yearOfBirth" placeholder="Year" value={formData.yearOfBirth} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Country:</label>
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Kenya">Kenya</option>
                        <option value="ghana">Ghana</option>
                        <option value="tanzania">Tanzania</option>
                        <option value="uganda">Uganda</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="south africa">South Africa</option>

                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                        <option value="india">India</option>
                        <option value="china">China</option>
                        <option value="russia">Russia</option>
                        <option value="france">France</option>
                        <option value="germany">Germany</option>
                        <option value="italy">Italy</option>
                        <option value="spain">Spain</option>
                        <option value="japan">Japan</option>
                        <option value="brazil">Brazil</option>
                        <option value="mexico">Mexico</option>
                        <option value="argentina">Argentina</option>
                        <option value="brazil">Brazil</option>

                    </select>
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Desired Gender:</label>
                    <select name="desiredGender" value={formData.desiredGender} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Relationship Type:</label>
                    <input type="text" name="relationshipType" value={formData.relationshipType} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Min Age Gap:</label>
                    <input type="number" name="minAgeGap" value={formData.minAgeGap} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Max Age Gap:</label>
                    <input type="number" name="maxAgeGap" value={formData.maxAgeGap} onChange={handleChange} />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default ProfilePage;
