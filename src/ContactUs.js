import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import man from './man.png';
import Rectangl from './Rectangl.png';
const AboutUs = () => {
  const [showContent, setShowContent] = useState(true); // Set to true initially

  const aboutContent = (
    <div>
      <p>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <span style={{ marginRight: '5px' }}>←</span> Back to Home Blog
        </Link>
      </p>
      <p> May 20, 2023</p>
      {/* Add your about us page content here */}
      <img src={man} alt="Mark Matovu" className="author-image" />
      <p className="author-name">Mark Matovu</p>
      <img src={Rectangl} alt="Mark Matovu" className="" />
      <div class="container">
        <div class="social-column" id="social-column">
          <div class="social-icons-container">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a href="https://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            {/* Add more social media icons here */}
          </div>
        </div>
      </div>
     
    </div>
  );

  return (
    <div>
      <h1>The Future of UI/UX Design: The Top 10 Trends and Predictions for 2023 and Beyond</h1>
      {showContent && aboutContent}
    </div>
  );
};

export default AboutUs;
