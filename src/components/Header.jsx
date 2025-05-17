import React from 'react';
import '../styles/theme.css';

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <div className="brand-section">
          <img src="/images/logo.png" alt="Logo" className="logo-img" />
          <div className="title-group">
            <h1>Mobilytics Analyzer</h1>
            <p className="tagline">• ANALYZE • OPTIMIZE • THRIVE</p>
          </div>
        </div>
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
