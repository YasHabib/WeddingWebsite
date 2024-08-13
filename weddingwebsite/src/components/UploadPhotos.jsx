// src/components/UploadPhotos.jsx
import React, { useState, useEffect } from 'react';
import { initGoogleAPI, signIn, signOut } from './GoogleAuth'; // Adjust the path as needed
import './uploadphotos.css'; // For custom styling

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const SCOPE = 'https://www.googleapis.com/auth/drive.file';

function UploadPhotos() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [authInstance, setAuthInstance] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    initGoogleAPI(CLIENT_ID, SCOPE).then(instance => {
      setAuthInstance(instance);
      setIsSignedIn(instance.isSignedIn.get());
      instance.isSignedIn.listen(setIsSignedIn); // Listen to sign-in state changes
    }).catch(error => {
      console.error('Error initializing Google API:', error);
    });
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile && isSignedIn) {
        const accessToken = authInstance.currentUser.get().getAuthResponse().access_token;
        
        const metadata = {
            name: selectedFile.name,
            mimeType: selectedFile.type
        };
        
        const formData = new FormData();
        formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
        formData.append('file', selectedFile);
        
        fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
            method: 'POST',
            headers: new Headers({ 'Authorization': `Bearer ${accessToken}` }),
            body: formData,
        }).then(response => response.json())
          .then(data => {
            console.log('File uploaded successfully:', data);
          }).catch(error => {
            console.error('Error uploading file:', error);
          });
    } else if (!isSignedIn) {
        alert('Please sign in to Google first.');
    } else {
        alert('Please select a file to upload.');
    }
};


  const handleSignIn = () => {
    if (authInstance) {
      signIn(authInstance).then(() => {
        console.log('User signed in');
      }).catch(error => {
        console.error('Sign-in error:', error);
      });
    }
  };

  const handleSignOut = () => {
    if (authInstance) {
      signOut(authInstance).then(() => {
        console.log('User signed out');
      }).catch(error => {
        console.error('Sign-out error:', error);
      });
    }
  };

  return (
    <div className="upload-container">
      <h1>GALLERY</h1>
      <p className="upload-message">Please upload any wedding pictures below:</p>
      {isSignedIn ? (
        <div>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="upload-input"
          />
          <button onClick={handleUpload} className="upload-button">
            Upload
          </button>
          <button onClick={handleSignOut} className="upload-button">
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={handleSignIn} className="upload-button">
          Sign In with Google
        </button>
      )}
    </div>
  );
}

export default UploadPhotos;
