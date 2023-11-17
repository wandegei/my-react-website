import React, { useEffect, useRef, useState } from 'react';
import './Blog.css';
import FacebookIcon from './images/Facebook.png';
import TwitterIcon from './images/Twitter.png';
import VectorIcon from './images/Vector .png';
import FlatIcon from './images/Flat.png';

const StickySocialIcons = () => {
  const [isSticky, setIsSticky] = useState(false);
  const socialIconsRef = useRef(null);
  const stickyHeight = 200; // Adjust the height as needed

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsSticky(scrollPosition >= stickyHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const socialIconsStyle = {
    position: isSticky ? 'fixed' : 'static',
    top: isSticky ? '0' : 'auto',
    width: '50px',
    paddingLeft: '38px',
    zIndex: 100,
    marginTop: isSticky ? '0px' : 'auto'
  };

  const sociolumnStyle = {
    width: '10%',
    padding: '20px',
    backgroundColor: '#ffff',
    display: 'flex',
    justifyContent: 'center',
    top: '50%',
    left: '-20px',
    transform: 'translateY(-50%)',
    marginLeft: '-33px',
    height: '195px',
    lineHeight: '2.5',
    boxShadow: '0 0 22px #090707'
  };

  return (
    <div className="cosex" style={socialIconsStyle} ref={socialIconsRef}>
      <div className="sociolumn" style={sociolumnStyle}>
        <div className="icons-container">
          <a href="https://www.facebook.com"><img className="socion" src={FacebookIcon} alt="Facebook" /></a>
          <a href="https://www.twitter.com"><img className="socian" src={TwitterIcon} alt="Twitter" /></a>
          <a href="https://www.instagram.com"><img className="sicon" src={VectorIcon} alt="Whatsup" /></a>
          <a href="https://www.linkedin.com"><img className="sodn" src={FlatIcon} alt="linkedin" /></a>
          {/* Add more social media icons here */}
        </div>
      </div>
    </div>
  );
};

export default StickySocialIcons;
