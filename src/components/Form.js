import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("El campo debe tener al menos 2 caracteres");
        } else {
            setFirstNameError("");
        }
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("El campo debe tener al menos 2 caracteres");
        } else {
            setLastNameError("");
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("El campo debe tener al menos 5 caracteres");
        } else {
            setEmailError("");
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("La contraseña debe tener al menos 8 caracteres");
        } else {
            setPasswordError("");
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError("Las contraseñas no coinciden");
        } else {
            setConfirmPasswordError("");
        }
    };

    return (
        <div>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={handleFirstNameChange} value={firstName} />
                    {firstNameError && <p>{firstNameError}</p>}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={handleLastNameChange} value={lastName} />
                    {lastNameError && <p>{lastNameError}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={handleEmailChange} value={email} />
                    {emailError && <p>{emailError}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={handlePasswordChange} value={password} />
                    {passwordError && <p>{passwordError}</p>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={handleConfirmPasswordChange} value={confirmPassword} />
                    {confirmPasswordError && <p>{confirmPasswordError}</p>}
                </div>
            </form>
        </div>
    );
};

export default Form;
