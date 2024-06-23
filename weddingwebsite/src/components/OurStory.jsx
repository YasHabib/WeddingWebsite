// src/OurStory.js
import React from 'react';
import './our-story.css'

function OurStory() {
  return (
    <div className="our-story" >
      <div className="content-left">
        {/* Left content here */}
        <h3>Yasin to write</h3>
        <p>This is where you write stuff for the left side.</p>
      </div>
      <div className="content-right">
        {/* Right content here */}
        <h3>Farhana to write</h3>
        <p>This is where you write stuff for the right side.</p>
      </div>
    </div>
  );
}

export default OurStory;
