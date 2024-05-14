// Poster.js

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Poster() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Poster</h1>
        <Link to="/" className="App-link Poster-back-button">Go Back</Link> {/* Added Poster-back-button class */}
        <img src={`${process.env.PUBLIC_URL}/static/fypPoster.jpg`} className="Poster-image" alt="Poster Image" />
      </header>
    </div>
  );
}

export default Poster;
