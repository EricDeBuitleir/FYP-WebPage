// Poster.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Poster() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`App ${isMounted ? 'fade-in' : ''}`}>
      <header className="App-header">
        <h1>Poster</h1>
        <Link to="/" className="App-link Poster-back-button">Go Back</Link>
        <img src={`${process.env.PUBLIC_URL}/static/fypPoster.jpg`} className="Poster-image" alt="Poster Image" />
      </header>
    </div>
  );
}

export default Poster;
