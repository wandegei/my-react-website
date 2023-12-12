// ArticleContent.js
import React from 'react';
import './page.css';

const ArticleContent = ({ headerList }) => {
  return (
    <div className="article" id="contentWrapper">
      {headerList.map((header, index) => (
        <React.Fragment key={header}>
          <h2 id={header} className="article-heading">
            {header}
          </h2>
          <p>
            {index + 1}. This is the content for {header}.
          </p>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ArticleContent;