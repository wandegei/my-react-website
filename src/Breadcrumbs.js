// Breadcrumbs.js
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ path, heading }) => {
  const pathSegments = path.split('/').filter((segment) => segment !== '');

  return (
    <nav className="breadcrumb">
      <ul>
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/page2">softwaredevelopment</Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={segment} className={`breadcrumb-item ${index === pathSegments.length - 1 ? 'active' : ''}`}>
            {index === pathSegments.length - 1 ? (
              // If it's the last segment, display the heading from props
              <span>{heading}</span>
            ) : (
              <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`}>{segment}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
