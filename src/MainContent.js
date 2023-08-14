import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImage from './mainImage.png';
import Rectangl from './Rectangl.png';
import man from './man.png';

const ArticleCard = () => (
  <div className="col-md-4">
    <img src={Rectangl} alt="" className="col-image" />
    <div className="content">
      <p className="date">
        {new Date(2023, 4, 20).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <div className="image-wrapper">
        <div className="author-info">
          <img src={man} alt="Mark Matovu" className="author-image" />
          <p className="author-name">Mark Matovu</p>
        </div>
      </div>
      <p className="title">
        Revolutionize Your Business: How to Create a Winning Digital Transformation Strategy That Works
      </p>
    </div>
  </div>
);

const MainContent = () => {
  const [fixedNav, setFixedNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerHeight = 100;

      setFixedNav(scrollTop > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main >
      <div className="content-container">
        <div className="text-image-container">
          <div className="text-container">
            <h1 className="main-heading">Welcome to<br/> TALLEN blog</h1>
            <p className="main-paragraph">
              Our experts share insights on software development, digital content creation, Cloud computing, UI/UX design, Mobile App, websites, Artificial Intelligence, digital transformation and more. Stay informed and ahead of the competition. Explore our blog for the latest tech trends.
            </p>
          </div>
          <div className="image-container">
            <img src={mainImage} alt="Main" className="main-image" />
          </div>
        </div>
      </div>

     
      <div className={`general ${fixedNav ? 'fixed-nav' : ''}`}>
        <div id="top-space" style={{ height: '10px' }}></div>
        <nav>
          <ul className="headers">
            <li className="all-button">
              <button>All</button>
            </li>
            <li><a href="/software-development">Software Development</a></li>
            <li><a href="/ai">Artificial Intelligence</a></li>
            <li><a href="/cloud-computing">Cloud Computing</a></li>
            <li><a href="/digital-business">Digital Business</a></li>
            <li><a href="/general">General</a></li>
            <li className="search-button">
  <button type="button">
    <svg xmlns="http://www.w3.org/2000/svg" className='Icon-but' width="2" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Search Blog
  </button>
</li>

          </ul>
        </nav>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br />

      {/* Article Cards */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="col-content" style={{ backgroundColor: 'rgba(246, 143, 30, 1)', display: 'flex', flexShrink: '0', flexDirection: 'column' }}>
              <h2 className="col-heading">Explore our services</h2>
              <a href="/services" className="col-button">Our Services</a>
            </div>
          </div>

          <ArticleCard />

          <ArticleCard />
        </div>
        <br /><br />
        <div className="row">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>

      {/* Rest of the code */}
    </main>
  );
};

export default MainContent;
