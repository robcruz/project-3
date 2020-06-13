import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <nav className="NavBar-Wrapper">
      <div>
        <h3 className="NavBar-Title">SwapMe Logo</h3>
      </div>
      <div className="NavBar-Links">
        <Link to="/" className="NavBar-Link">Home</Link>
        <Link to="/add" className="NavBar-Link">Swap</Link>
        <Link to="/info" className="NavBar-Link">Info</Link>
      </div>
    </nav>
  );
};

export default Home;