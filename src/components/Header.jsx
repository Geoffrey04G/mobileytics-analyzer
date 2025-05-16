import React from 'react';
import '../styles/theme.css';

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <h1>Mobilytics Analyzer</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <div className="nav-buttons">
            <button className="nav-btn">Log In</button>
            <button className="nav-btn">Get Started for Free</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;