// src/components/UploadPhotos.jsx
import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from './Firebase'; // Import from firebase.js
import { collection, addDoc } from 'firebase/firestore';
import './uploadphotos.css'; // For custom styling

function UploadPhotos() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploading(false); // Reset the uploading state when a new file is selected
    setProgress(0); // Reset the progress state when a new file is selected
  };

  const handleUpload = () => {
    if (selectedFile) {
      const fileRef = ref(storage, `images/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(fileRef, selectedFile);

      setUploading(true);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Progress function
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progress);
        },
        (error) => {
          // Error function
          console.error('Error uploading file:', error);
          setUploading(false);
        },
        () => {
          // Complete function
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File uploaded successfully:', downloadURL);

            // Save the download URL to Firestore
            addDoc(collection(db, 'uploadedImages'), { url: downloadURL })
              .then(() => {
                console.log('Image URL saved to Firestore');
                setUploading(false);
                setSelectedFile(null);
                setProgress(0);
              })
              .catch((error) => {
                console.error('Error saving URL to Firestore:', error);
                setUploading(false);
              });
          });
        }
      );
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="upload-container">
      <h1>GALLERY</h1>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className='upload-input'
      />
      <button onClick={handleUpload} className="upload-button">
        {uploading ? (progress === 100 ? 'Upload Complete' : `Uploading... ${progress}%`) : 'Upload'}
      </button>
      <br/>
      <br/>
    </div>

  );
}

export default UploadPhotos;
