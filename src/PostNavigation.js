import React from 'react';
import { Link } from 'react-scroll';
import './PostNavigation.css';

const PostNavigation = () => {
  return (
    <div className="post-navigation-left">
      <div className="nav-container">
        <div className="nav-title">Contents</div>
        <ul>
          {[
            '1.- Determine - Goals - and - Objectives',
            '2.- Assess - Your - Current - State',
            '3.- Embrace- a -Customer- -Centrict - Approach',
            '4.- Build - a - Cross- -Functional -Team',
            '5.- Invest- in - the - Right - Technologies',
            '6.-Create- a -Realistic- Roadmap',
            '7.-Foster- a -Culture- of- Innovation',
            '8.-Continuously -Monitor,-Evaluate,-and-Learn',
            '9.-Communicate-and-Educatet',
            '10.-Celebrate-Success-and-Learn-from-Failure',
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

export default PostNavigation;
