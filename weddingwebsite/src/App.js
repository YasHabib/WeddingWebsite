import './App.css';
import React, { useState } from 'react';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import PasswordComponent from './components/PasswordComponents'



function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handlePasswordSubmit = (enteredPassword) => {
    // Replace 'yourPassword' with your actual password
    if (enteredPassword === 'FarhanaWedsYasin060924') {
      setLoggedIn(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section id="our-story">
        <OurStory />
      </section>
      {!loggedIn ? (
        <PasswordComponent onPasswordSubmit={handlePasswordSubmit} />
      ) : (
        <div>
          <section id="event-details">
            <EventDetails />
          </section>
        </div>
      )}

    </div>
  );
}

export default App;