import React, { useState, useEffect } from 'react';
import './page.css';

const NavigationBar = ({ headerList }) => {
  const [selectedHeader, setSelectedHeader] = useState('');

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
    const targetElement = document.getElementById(header);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headers = headerList
        .map((header) => document.getElementById(header))
        .filter(Boolean);

      const closestHeader = headers.reduce((closest, current) => {
        if (!closest || !current) {
          return closest;
        }

        const currentOffsetTop = current.offsetTop;

        if (
          Math.abs(currentOffsetTop - scrollPosition) <
          Math.abs(closest.offsetTop - scrollPosition)
        ) {
          return current;
        }

        return closest;
      }, null);

      if (closestHeader) {
        setSelectedHeader(closestHeader.id);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerList]);

  return (
    <div className="navigation-bar">
      <ul>
        {headerList.map((header) => (
          <li
            key={header}
            onClick={() => handleHeaderClick(header)}
            className={selectedHeader === header ? 'active' : ''}
          >
            {header}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;