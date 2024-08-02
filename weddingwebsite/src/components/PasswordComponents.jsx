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
        <label htmlFor="password" style={{marginBottom: '15px', display:'block'}}>Enter the password provided to you by one of the hosts :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/>
        <button type="submit" style={{marginTop: '15px', padding: '8px 16px', borderRadius: '4px', backgroundColor: 'darkBlue', color: '#fff', border: 'none', cursor: 'pointer'}}>Submit</button>
      </form>
    </div>
  );
};

export default PasswordComponent;
