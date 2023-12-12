import React, { useState, useRef, useEffect } from 'react';
import './YourComponent.css'; // Import the external CSS file
import Object from './images/Object.png';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const YourComponent = ({ backgroundImage }) => {
  const [isShareButtonClicked, setShareButtonClicked] = useState(false);
  const shareUrl = 'https://tallen.tech/'; // Replace with your actual website URL
  const title = 'Check out this amazing content!'; // Replace with your desired title

  const shareButtonProps = {
    url: shareUrl,
    title: title,
    className: 'styled-button',
  };

  const openSocialMedia = (url) => window.open(url, '_blank');

  const contentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        setShareButtonClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contentRef]);

  return (
    <div className="lumn" ref={contentRef}>
      <h2 className='spredsdd'>Spread the Knowledge,<br />Share the Value with others</h2>

      {/* Share button */}
      <button className="styd-button" onClick={() => setShareButtonClicked(!isShareButtonClicked)}>
        Share
      </button>

      {/* Popup with social media icons */}
      {isShareButtonClicked && (
        <div className="popup-container">
          {/* Close button */}
          <button className="close-button" onClick={() => setShareButtonClicked(false)}>
            Close
          </button>

          {/* Social media icons */}
          <div className="social-icons-container">
            <FacebookIcon
              size={32}
              round
              onClick={() => openSocialMedia(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`)}
            />
            <LinkedinIcon
              size={32}
              round
              onClick={() => openSocialMedia(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`)}
            />
            <TwitterIcon
              size={32}
              round
              onClick={() => openSocialMedia(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`)}
            />
            <WhatsappIcon
              size={32}
              round
              onClick={() => openSocialMedia(`https://api.whatsapp.com/send?text=${title}%20${shareUrl}`)}
            />
            <EmailShareButton {...shareButtonProps} className="email-icon">
              <EmailIcon size={32} round />
            </EmailShareButton>
            {/* Add other specific share buttons similarly */}
          </div>
        </div>
      )}

      <div className='imaxss'>
        <img src={Object} alt="AI and machine learning" className="imaxss" />
      </div>
    </div>
  );
};

export default YourComponent;
