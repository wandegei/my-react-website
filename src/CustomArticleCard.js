// CustomArticleCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CustomArticleCard.css';  // Import the CSS file

const CustomArticleCard = ({ to, title, content, date, image, smallImageText }) => {
  const hasImage = image !== undefined && image !== null;

  return (
    <div className="custom-col-md-4">
      <Link to={to} className='custom-link'>
        <div className="custom-card">
          {hasImage && <img src={image} className="custom-card-img-top" alt="Articles" />}
          <div className="content-wrapper">
            <div className="title-wrapper">
              <h5 className="custom-card-title">{title}</h5>
              {/* Remove the image-wrapper */}
              <span className="small-image-text">{smallImageText}</span>
            </div>
            <p className="custom-card-text">{content}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CustomArticleCard;
