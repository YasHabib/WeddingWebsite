import './App.css';
import React, { useState, useEffect } from 'react'; 
import Header from './components/Header';
import EventDetails from './components/EventDetails';
import PasswordComponent from './components/PasswordComponents'
import UploadPhotos from './components/UploadPhotos';
import DisplayPhotos from './components/DisplayPhotos';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const password = process.env.REACT_APP_PASSWORD;

  useEffect(() => {
    const loginTimestamp = localStorage.getItem('loginTimestamp');
    if (loginTimestamp) {
      const elapsedTime = Date.now() - parseInt(loginTimestamp, 10);
      if (elapsedTime < 3600000) { // 1 hour in milliseconds
        setLoggedIn(true);
      } else {
        localStorage.removeItem('loginTimestamp');
      }
    }
  }, []);

  const handlePasswordSubmit = (enteredPassword) => {
    if (enteredPassword === password) {
      setLoggedIn(true);
      localStorage.setItem('loginTimestamp', Date.now()); // Store the login timestamp
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