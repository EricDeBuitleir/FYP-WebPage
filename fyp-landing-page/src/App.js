import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Poster from './Poster';

function App() {
  return (
    <Router basename="/FYP-WebPage">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poster" element={<Poster />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  
  return (
    <header className="App-header">
      <img src={`${process.env.PUBLIC_URL}/static/fypSelfImage.jpg`} className="App-image" alt="logo" />
      <h1>Eric Butler (20094078)</h1>
      <h7>Applied Computing (Automotive & Automation)</h7>
      <p>This is my landing page for my final year project 2023-24.</p>
      <h2>Poster</h2>
      <p>
        Link to poster: 
        <Link className="App-link" to="/poster">
          Here
        </Link>
      </p>
      <h3>Demo Video</h3>
      <p>Link to demo video: 

      <a
          className="Video-link" 
          href="https://www.youtube.com/watch?v=9IlrXLb528k&t=1s&ab_channel=EricButler"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>

      </p>
      <h4>GitHub Repository</h4>
      <p>
        Link to GitHub repo:
        <a
          className="App-link" 
          href="https://github.com/EricDeBuitleir/FYP-Public"
          target="_blank"
          rel="noopener noreferrer"
        >
           Here
        </a>
      </p>
    </header>
  );
}

export default App;


