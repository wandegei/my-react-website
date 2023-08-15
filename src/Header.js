import React from 'react';
import logo from './logo tallen.svg';
import './App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" style={{ width: '163px' }} />
        <span className="blog-title">Blog</span>
      </div>
      <nav>
        <ul className="nav-list">
          <li>Home</li>
          <li>ContactUs</li>
        </ul>
        <button className="button">Our Services</button>
      </nav>
    </header>
  );
};

export default Header;
