import React from 'react';
import logo from './logo tallen.svg'; // Import the SVG image
import './App.css'; // Import the external CSS file

const Header = () => {
  return (
    <header className="header">
      {/* Logo and Blog on the left side */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="blog-title">Blog</span>
      </div>

      {/* Navigation and Button on the right side */}
      <nav>
        <ul className="nav-list">
          <li>Home</li>
          <li>ContactUs</li>
        </ul>
        <button className="button">Button</button>
      </nav>
    </header>
  );
};

export default Header;
