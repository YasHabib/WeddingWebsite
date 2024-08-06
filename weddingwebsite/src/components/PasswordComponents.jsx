// PasswordComponent.jsx

import React, { useState } from 'react';
import './passwordComponents.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const PasswordComponent = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onPasswordSubmit(password); // Pass the entered password to the parent component
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='enterPassword'>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="password" style={{ marginBottom: '15px', display: 'block' }}>
          Enter the password provided to you by one of the hosts:
        </label>
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <i
            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} toggle-icon`}
            onClick={toggleShowPassword}
          ></i>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordComponent;
