import React, { useState } from 'react';
import './viewPassword.css'

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-input">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        className="password-field"
      />
      <button
        type="button"
        onClick={toggleShowPassword}
        className="toggle-button"
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordInput;
