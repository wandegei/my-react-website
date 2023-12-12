import React from 'react';
import './pagination.css';
const pagination = () => {
  return (
    <div className="nav-links">
      <a className="prev page-numbers" href="https://kinsta.com/blog/page/14/">
        Previous Page
      </a>
      <a className="page-numbers" href="/home">
        1
      </a>
      <span className="page-numbers dots">…</span>
      <a className="page-numbers" href="https://kinsta.com/blog/page/13/">
        13
      </a>
      <a className="page-numbers" href="https://kinsta.com/blog/page/14/">
        14
      </a>
      <span aria-current="page" className="page-numbers current">
        15
      </span>
      <a className="page-numbers" href="https://kinsta.com/blog/page/16/">
        16
      </a>
      <a className="page-numbers" href="https://kinsta.com/blog/page/17/">
        17
      </a>
      <span className="page-numbers dots">…</span>
      <a className="page-numbers" href="https://kinsta.com/blog/page/93/">
        93
      </a>
      <a className="next page-numbers" href="https://kinsta.com/blog/page/16/">
        Next Page
      </a>
    </div>
  );
};

export default pagination;
