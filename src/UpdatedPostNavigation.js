// PostNavigationUpdated.js
import React from 'react';
import { Link } from 'react-scroll';
import './PostNavigationUpdated.css';

const UpdatedPostNavigation = () => {
  return (
    <div className="updated-post-navigation-left">
      <div className="updated-nav-container">
        <div className="updated-nav-title">Contents</div>
        <ul>
          {[
            '1.- personalized - user - -experiences',
            '2.-integration-of-ai-and-machine-learning',
            '3.-inclusive-and-accessible-design',
            '4.- inclusive-and-accesible-design',
            '5.- simplified-user-interfaces-ui',
            '6.-use-of-advanced-animations-and-transition',
            '7.-gamification-and-interactive-design',
            '8.-gggg',
            '9.-Voice - User - Interface - (VUI) - and - Conversational - UI',
            '10.-Integration - of - Dark - Mode',
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

export default UpdatedPostNavigation;
