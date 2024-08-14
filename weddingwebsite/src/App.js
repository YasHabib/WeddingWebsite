import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import EventDetails from './components/EventDetails';
import PasswordComponent from './components/PasswordComponents'
import UploadPhotos from './components/UploadPhotos';
import DisplayPhotos from './components/DisplayPhotos';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const password = process.env.REACT_APP_PASSWORD;


  const handlePasswordSubmit = (enteredPassword) => {
    // Replace 'yourPassword' with your actual password
    if (enteredPassword === password) {
      setLoggedIn(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="App">
      <header>
      </header>
      <section id="our-story">
        <Header />
      </section>
      {!loggedIn ? (
        <PasswordComponent onPasswordSubmit={handlePasswordSubmit} />
      ) : (
        <div>
          <section>
            <EventDetails />
            <UploadPhotos/>
            <DisplayPhotos/>
          </section>
        </div>
      )}

    </div>
  );
}

export default App;