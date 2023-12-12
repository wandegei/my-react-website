import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo tallen.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  

  const navItems = [
    { label: 'Home', path: '/', closeOnClick: true },
    { label: 'Contact Us', path: '/contact', closeOnClick: true },
    { label: 'Services', path: '/services', closeOnClick: true },
  ];

  return (
    <div className='xxds'>
      <header className="header"> 
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo-container">
            <div className="logo-content">
            <Link to="https://tallen.tech/blog" className="blog-title">
              <img src={logo} alt="Logo" className="logo" />
            </Link> 

              <Link to="https://tallen.tech/blog" className="blog-title">
                Blog
              </Link> 
            </div>
            <div className="logo-conten">
  <Link to="https://tallen.tech/" className="blog-title">
    Home
  </Link>
  <Link to="https://tallen.tech/contact" className="blog-title">
    Contact Us
  </Link>
  <button className="service-button">
    <Link to="https://calendly.com/tallen5/free?hide_gdpr_banner=1&month=2023-11" className="blog-tle">
    Free Consultation
    </Link>
  </button>
</div>

          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;