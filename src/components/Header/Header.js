import React from 'react';
import '../App/App.css';
import { Link } from 'react-router-dom';

function Header() {
  const navStyle = {
    color: 'white',
  };

  function logOut() {}

  return (
    <header className="App__header">
      <nav>
        <h1>DogLog</h1>
        <ul className="nav-links">
          <Link style={navStyle} to="/home">
            <li>Home</li>
          </Link>
          <Link style={navStyle} to="/profile">
            <li>Profile</li>
          </Link>
          <Link style={navStyle} to="/dogs">
            <li>Dogs</li>
          </Link>
          <Link style={navStyle} to="/goals">
            <li>Goals</li>
          </Link>
          <Link style={navStyle} onClick={logOut} to="/">
            <li>Log Out</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
