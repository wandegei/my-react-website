import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FaBars, FaTimes, FaAngleRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo tallen.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenuAndNavigate = path => {
    setIsMenuOpen(false);
    navigate(path);
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
              {/* Your SVG Path Here */}
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
          <button className="hones" onClick={() => closeMenuAndNavigate('/')} style={{ marginTop: '100px', position: 'fixed', paddingLeft: '20px' }}>
            Home <FaAngleRight className="custom-icon-class" style={{ marginLeft: '265px' }} />
          </button>
          <button className="hones" onClick={() => closeMenuAndNavigate('/contact')} style={{ marginTop: '140px', position: 'fixed', paddingLeft: '20px' }}>
            Contact Us <FaAngleRight className="custom-icon-class" style={{ marginLeft: '224px' }} />
          </button>
          <button className='dafff' onClick={() => closeMenuAndNavigate('/services')} style={{ marginTop: '700px', position: 'fixed' }}>
            Services
          </button>
        </Menu>
      </nav>
    </header>
  );
};

export default BurgerMenu;
