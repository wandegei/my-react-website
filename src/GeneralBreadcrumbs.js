// GeneralBreadcrumbs.js
import React from 'react';
import { Link } from 'react-router-dom';

const GeneralBreadcrumbs = ({ path, heading }) => {
  const pathSegments = path.split('>').filter((segment) => segment !== '');

  return (
    <nav className="breadcrumb">
      <ul>
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/General">General</Link>
        </li>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={segment}>
            <li className={`breadcrumb-item ${index === pathSegments.length - 1 ? 'active' : ''}`}>
              {index === pathSegments.length - 1 ? (
                // If it's the last segment, display the heading from props
                <span>{heading}</span>
              ) : (
                <React.Fragment>
                  <Link to={`/${pathSegments.slice(0, index + 1).join('>')}`}>{segment}</Link>
                  <span>&gt;</span>
                </React.Fragment>
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default GeneralBreadcrumbs;
