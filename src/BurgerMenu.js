import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo tallen.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';
import { FaAngleRight } from 'react-icons/fa';

function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuAndNavigate = (path) => {
    setIsMenuOpen(false);
    navigate(path); // Use navigate to navigate to the specified path
  };

  return (
    <header className="basr" style={{ margin: '40px' }}>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo-container">
          <div className="logo-content" style={{ position: 'fixed' }}>
            <img src={logo} alt="Logo" className="logo" />
            <Link to="/" className="logo">
              Blog
            </Link>
            <Link to="/" className="">
              <svg xmlns="http://www.w3.org/2000/svg" className='Icon-but' width="2" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
           </Link>
          </div>
        </div>
        <button onClick={toggleMenu} className="bars" style={{ margin: '40px' }}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <Menu
          right
          isOpen={isMenuOpen}
          onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
          styles={{ width: isMenuOpen ? '200px' : 'auto' }}
          className={`custom-menu ${isMenuOpen ? 'blsee open' : ''}`}
        >
          <img src={logo} alt="Logo" className="log" />
          <button className="hones" onClick={() => closeMenuAndNavigate('/')} style={{ marginTop: '100px', position: 'fixed',paddingLeft: '20px' }}>
            Home <FaAngleRight className="custom-icon-class" style={{ marginLeft: '265px' }} />
          </button>
          <button className="hones" onClick={() => closeMenuAndNavigate('/contact')} style={{ marginTop: '140px', position: 'fixed',paddingLeft: '20px'  }}>
            Contact Us <FaAngleRight className="custom-icon-class" style={{ marginLeft: '224px' }} />
          </button>
          <button className='dafff' onClick={() => closeMenuAndNavigate('/services')} style={{ marginTop: '700px', position: 'fixed'}}> 
            Services
          </button>
        </Menu>
      </nav>
    </header>
  );
}

export default BurgerMenu;