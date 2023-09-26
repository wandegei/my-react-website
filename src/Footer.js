import React, { useState } from 'react';
import { FaAngleRight, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import sampleImage from './sampleImage.png';

const sections = [
  {
    id: 'company',
    title: 'Company',
    links: [
      { id: 'who', label: 'Who Are We' },
      { id: 'we', label: 'What We Do' },
      { id: 'core', label: 'Our Core Values' },
    ],
  },
  {
    id: 'services',
    title: 'Our Services',
    links: [
      { id: 'about', label: 'About Us' },
      { id: 'team', label: 'Our Team' },
      { id: 'sector', label: 'Our Sectors' },
    ],
  },
  {
    id: 'social',
    title: 'Social Media',
    links: [
      { id: 'facebook', label: 'Facebook', icon: <FaFacebook /> },
      { id: 'twitter', label: 'Twitter', icon: <FaTwitter /> },
      { id: 'instagram', label: 'Instagram', icon: <FaInstagram /> },
    ],
  },
];


const Footer = () => {
  const [showSection, setShowSection] = useState({});

  const toggleContent = (sectionId) => {
    setShowSection((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };

  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <div className="contact">
            <img src={sampleImage} alt="Sample" width="100" className="CONNT" />
            <p className="CONT">TALLEN is a tech enterprise that provides world-class services in UI/UX design, web/app development, and management.</p>
          </div>
        </div>
        {sections.map((section) => (
          <div className="footer-column" key={section.id}>
            <div className="cone-container">
              <h3 className="cone">
                {section.title}
                <FaAngleRight
                  className={`arrow ${showSection[section.id] ? 'show' : ''}`}
                  onClick={() => toggleContent(section.id)}
                />
              </h3>
              
            </div>
            <div className={`additional-links ${showSection[section.id] ? 'show' : ''}`}>
              {section.links.map((link) => (
                <div className="link-item" key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="footer-separator">
        <hr />
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          Copyright&copy; {new Date().getFullYear()} TALLEN. All rights reserved
        </p>
        <div className="footer-links">
          <a href="#Terms">Terms</a>
          <span className="footer-line"> | </span>
          <a href="#Privacy">Privacy</a>
          <span className="footer-line"> | </span>
          <a href="#help">Help</a>
          <span className="footer-line"> | </span>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
