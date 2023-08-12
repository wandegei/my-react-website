import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import sampleImage from './sampleImage.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        
      <div class="footer-column">
  
  <div class="contact">
    <div class="contact-item">
    <img src={sampleImage} alt="Sample" width="100" className='CONNT'/>
      <p className='CONT'>TALLEN is a tech enterprise that provides world-class services in UI/UX design, web/app development, and management. .</p>
    </div>
  </div>
</div>
<div className="footer-column">
          <h3 className='cone'>Company</h3>
          <div className="additional-links">
            <div className="link-item">
              <a href="#who">Who Are We</a>
            </div>
            <div className="link-item">
              <a href="#we">What We Do</a>
            </div>
            <div className="link-item">
              <a href="#Core">Our Core Values</a>
            </div>
            <div className="link-item">
              <a href="#Our">Our Achievements</a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3 className='cone'>Our Services</h3>
          <div className="additional-links">
            <div className="link-item">
              <a href="#About">About Us</a>
            </div>
            <div className="link-item">
              <a href="#tearm">Our Team</a>
            </div>
            <div className="link-item">
              <a href="#sector">Our sectors</a>
            </div>
            <div className="link-item">
              <a href="#sector">Our sectors</a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3 className='cone'>Social Media</h3>
          <div className="social-icons">
            <div className="social-icon">
              <FaFacebook />
              <span>Facebook</span>
            </div>
            <div className="social-icon">
              <FaTwitter />
              <span>Twitter</span>
            </div>
            <div className="social-icon">
              <FaInstagram />
              <span>Instagram</span>
            </div>
          </div>
        </div>
       
      </div>
     
<div className="footer-column">
          <div className="footer-separator">
            <hr />
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              Copyright&copy; {new Date().getFullYear()} TALLEN. All rights reserved
            </p>
            <div className="footer-links">
              <a href="#terms">Terms</a>
              <span className="footer-line"> | </span>
              <a href="#privacy">Privacy</a>
              <span className="footer-line"> | </span>
              <a href="#help">Help</a>
              <span className="footer-line"> | </span>
              <a href="#contant">Contact Us</a>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;

