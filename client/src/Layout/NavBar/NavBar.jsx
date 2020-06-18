import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <nav className="NavBar-Wrapper">
      <div>
        <div id="box">
          <p id="flashlight">
            <span id="flash">Swap</span>
            <span id="light">Me</span>
          </p>
        </div>
      </div>
      <div className="NavBar-Links">
        <Link to="/" className="NavBar-Link">Home</Link>
        <Link to="/add" className="NavBar-Link">Swap</Link>
        <Link to="/info" className="NavBar-Link">Info</Link>
          <Link to="/chat" className="NavBar-Link">Chat</Link>
      </div>
    </nav>
  );
};

export default Home;
