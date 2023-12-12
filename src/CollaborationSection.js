


// Improved code with external CSS
import React from 'react';
import frames from './/images/frames.png'; // Update the path accordingly
import './CollaborationSection.css'; // Create a CSS file with this name

const CollaborationSection = () => {
  return (
    <div className="collaboration-section">
      <img src={frames} alt="RAM" />
      <div className="content">
        <h2 className="collaboration-heading">
          Let's Collaborate,<br />Unlock Success
        </h2>
        <a href="https://calendly.com/tallen5/free?hide_gdpr_banner=1&month=2023-11" className="get-started-link">
          <button className="get-started-button">Free Consultation</button>

        </a>
        
      </div>
    </div>
  );
};

export default CollaborationSection;

