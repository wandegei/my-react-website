import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import React Router
import logo from './logo tallen.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className={`white-background ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <div className="logo-content">
            <img src={logo} alt="Logo" className="logo" />
            {/* Make the "Blog" text a link */}
            <Link to="/" className="blog-title">
              Blog
            </Link>
          </div>
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <div className={`menu-toggle`} onClick={toggleMenu}>
            {isMenuOpen ? (
              <div className={`icon open-icon`}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            ) : (
              <div className={`icon close-icon`}>
                <span className="close-icon-content">x</span>
              </div>
            )}
          </div>
          <ul className={`nav-list ${isMenuOpen ? 'visible' : ''}`}>
            {/* Link to Home page */}
            <li className="nav-item menu-item">
              <Link to="/" onClick={toggleMenu} style={{textDecoration: "none"}}>
                Home
              </Link>
              <span className="arrow-icon d-md-none">&gt;</span>
            </li>
            {/* Link to Contact Us page */}
            <li className="nav-item menu-item">
              <Link to="/contact" onClick={toggleMenu} style={{textDecoration: "none"}}>
                Contact Us
              </Link>
              <span className="arrow-icon d-md-none">&gt;</span>
            </li>
            <li className={`nav-item services-button ${isMenuOpen ? 'visible' : ''}`}>
              <button style={{ backgroundColor: "#f68f1e" }} className="btn btn-primary">
                <Link to="/services" onClick={toggleMenu} style={{textDecoration: "none"}}>
                  Services
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
