import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImage from './mainImage.png';
import Rectangl from './Rectangl.png';
import man from './man.png';
import search from './search.png';

const ArticleCard = ({ date }) => (
  <div className="col-md-4">
    <img src={Rectangl} alt="" className="col-image" />
    <div className="content">
      <p className="date">
        {date.toLocaleDateString('en-US', {
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

  const currentDate = new Date();

  return (
    <main>
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
                <img src={search} alt="search" className="search-icon" />
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
            <div className="col-content" style={{ backgroundColor: 'rgba(246, 143, 30, 1)', display: 'flex', flexDirection: 'column' }}>
              <h2 className="col-heading">Explore our services</h2>
              <a href="/services" className="col-button">Our Services</a>
            </div>
          </div>

          <ArticleCard date={currentDate} />

          <ArticleCard date={currentDate} />
        </div>
        <br /><br />
        <div className="row">
          <ArticleCard date={currentDate} />
          <ArticleCard date={currentDate} />
          <ArticleCard date={currentDate} />
        </div>
      </div>
      <section className="subscribe-area">
        <div className="container">
          <div className="row footer-container">
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="subscribe-text">
                <h2 className="dexx">Stay updated by subscribing
to our newsletter</h2>
              </div>
            </div>
            <div className="col-md-8 col-sm-4 col-xs-4 form-item-footer">
              <div className="subscribe-wrapper subscribe2-wrapper">
                <div className="subscribe-form">
                  <form action="#">
                  <div className="form-inline newsletter" style={{ display: 'flex' }}>
  <div className="form-group">
    <input type="text" placeholder="Name" value="" style={{backgroundColor:'rgba(247, 144, 31, 1)',color:'rgba(255, 255, 255, 1)', marginTop:'20px'}} />
  </div>
  <div className="form-group formgroup2" style={{ display: 'flex', alignItems: 'center' }}>
    <input type="email" placeholder="Email" style={{ borderLeft: '1px solid white', marginLeft: '-10px',marginTop:'20px',backgroundColor:'rgba(247, 144, 31, 1)',color:'rgba(255, 255, 255, 1)', borderRadius: '0px' }} value="" />
    <div style={{ cursor: 'pointer', backgroundColor: 'rgba(247, 144, 31, 1)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '20px' }}>
      <a href="#services">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M16.59 11H4v2h12.59l-3.29 3.29L14 18l6-6-6-6-1.29 1.29L16.59 11z"/>
        </svg>
      </a>
    </div>
  </div>
</div>

                  </form>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex' }}></div>
          <div className="Toastify"></div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
