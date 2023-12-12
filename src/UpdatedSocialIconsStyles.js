
import React, { useEffect, useRef, useState } from 'react';
import './UpdatedSocialIconsStyles.css'; // Import updated external CSS file
import FacebookIcon from './images/Facebook.png';
import TwitterIcon from './images/Twitter.png';
import VectorIcon from './images/Vector .png';
import FlatIcon from './images/Flat.png';

const UpdatedSocialIcons = () => {
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
    paddingLeft: '42px',
    zIndex: 100,
    marginTop: isSticky ? '220px' : 'auto',
  };

  return (
    <div className="updated-social-icons-container" style={socialIconsStyle} ref={socialIconsRef}>
      <div className="new-social-column">
        <div>
          <h1 className="new-shared">Share</h1>
        </div>
        <div className="new-icons-container">
          <a href="https://www.facebook.com/NewTallen4Tech">
            <img className="new-social-icon" src={FacebookIcon} alt="Facebook" />
          </a>
          <a href="https://twitter.com/NewTallen4Tech">
            <img className="new-social-icon" src={TwitterIcon} alt="Twitter" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B442081338656&text&type=phone_number&app_absent=0">
            <img className="new-social-icon" src={VectorIcon} alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/company/82058798/admin/feed/posts/">
            <img className="new-social-icon" src={FlatIcon} alt="LinkedIn" />
          </a>
          {/* Add more updated social media icons here */}
        </div>
      </div>
    </div>
  );
};

export default UpdatedSocialIcons;