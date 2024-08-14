import React, { useState, useEffect } from 'react';
import { listAll, getDownloadURL, ref } from 'firebase/storage';
import { storage } from './Firebase';
import './displayphotos.css'; // For custom styling


function DisplayPhotos() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      // Reference to the 'images/' folder in Firebase Storage
      const imagesRef = ref(storage, 'images/');
  
      // List all items (files) in the images folder
      const result = await listAll(imagesRef);
  
      // Get URLs for each file
      const urls = await Promise.all(result.items.map((itemRef) => getDownloadURL(itemRef)));
  
      console.log('Fetched URLs:', urls); // Debugging output
      setImageUrls(urls);
    } catch (error) {
      console.error('Error fetching images:', error); // Error handling
    }
  };

  return (
    <div className="gallery">
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Uploaded ${index + 1}`} className="gallery-image" />
      ))}
    </div>
  );
}

export default DisplayPhotos;
