import React from 'react';

const ResultComponent = ({ data }) => {
  // Destructure the 'data' object to access its properties
  const { title, description, link, imageUrl } = data;

  // Conditional rendering: if there is no title or description, display a message
  if (!title && !description) {
    return <div className="result">No results found.</div>;
  }

  return (
    <div className="result">
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      )}
      {imageUrl && <img src={imageUrl} alt="Result Image" className="result-image" />}
      {/* You can add more content as needed, like additional links, buttons, or any other HTML elements */}
    </div>
  );
};

export default ResultComponent;

