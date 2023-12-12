// LandingPageNavigation.js
import React from 'react';
import { Link } from 'react-scroll';
import './LandingPageNavigation.css';

const LandingPageNavigation = () => {
  return (
    <div className="postNavigation">
      <div className="nav-container">
        <div className="nav-title">Contents</div>
        <ul>
          {[
            '1.-research-and-know-your-audience',
            '2.-define-your-goal',
            '3.-craft-a-compelling-headline-and-subheading',
            '4.-create-engaging-and-relevant-content',
            '5.-design-for-visual-appeal-and-user-friendliness',
            '6.-add-a-strong-call-to-action-cta',
            '7.-implement-ab-testing-and-conversion-tracking',
            '8.-summary',
            // Add more tips as needed
          ].map((section, index) => (
            <li key={index}>
              <Link to={section} spy={true} smooth={true} duration={500}>
                {section
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPageNavigation;
