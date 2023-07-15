import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <div>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={handleFirstNameChange} value={firstName} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={handleLastNameChange} value={lastName} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={handleEmailChange} value={email} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={handlePasswordChange} value={password} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={handleConfirmPasswordChange} value={confirmPassword} />
                </div>
            </form>
            <div>
                <h4>Your Form Data:</h4>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};

export default Form;

