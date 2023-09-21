import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo tallen.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';
import { FaAngleRight } from 'react-icons/fa';

// const ToggleButton = ({ isMenuOpen, toggleMenu }) => (
//   <div className="menu-toggle" onClick={toggleMenu} style={{ margin: '40px' }}>
//     {isMenuOpen ? (
//       <div className="icon close-icon">
//         <span className="close-icon-content">x</span>
//       </div>
//     ) : (
//       <div className="icon open-icon">
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//     )}
//   </div>
// );

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
          <button className="hones" onClick={() => closeMenuAndNavigate('/')} style={{ marginTop: '100px', position: 'fixed' }}>
            Home <FaAngleRight className="custom-icon-class" style={{ marginLeft: '240px' }} />
          </button>
          <button className="hones" onClick={() => closeMenuAndNavigate('/contact')} style={{ marginTop: '140px', position: 'fixed' }}>
            Contact Us <FaAngleRight className="custom-icon-class" style={{ marginLeft: '205px' }} />
          </button>
          <button className='dafff' onClick={() => closeMenuAndNavigate('/services')} style={{ marginTop: '760px', position: 'fixed'}}>
            Services
          </button>
        </Menu>
      </nav>
    </header>
  );
}

export default BurgerMenu;
