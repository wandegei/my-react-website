import React from 'react';
import { Link } from 'react-scroll';
import './PostNavigation.css';

const HowToBuildPostNavigation = () => {
  return (
    <div className="post-navigation-left">
      <div className="nav-container">
        <div className="nav-title">Contents</div>
        <ul>
          {[
            '1. -Idea - Generation',
            '2.- Market - Research',
            '3.- Define - the - Scope - and - Features',
            '4.- Develop - a - Minimum - Viable - Product',
            '5.- Designing - User - Interface',
            '6.-Development -Coding',
            '7.-Testing - and - Quality- Assurance',
            '8.-App - Store - Optimization',
            '9.-Marketing - and - Promotion',
            '10.-Performance - Monitoring - and - Improvements',
            '11.-App - Monetization -Strategies',
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

export default HowToBuildPostNavigation;
