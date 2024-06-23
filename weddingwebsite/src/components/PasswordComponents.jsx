// PasswordComponent.jsx

import React, { useState } from 'react';
import './passwordComponents.css'

const PasswordComponent = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onPasswordSubmit(password); // Pass the entered password to the parent component
  };

  return (
    <div className='enterPassword'>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="password">Enter the password provided to you by one of the hosts :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordComponent;
