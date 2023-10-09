import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImage from './mainImage.png';
import Rectangl from './Rectangl.png';
import man from './man.png';
import AboutUs from './ContactUs';


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

const AboutUs = () => {
  const [fixedNav, setFixedNav] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerHeight = 50;
      setFixedNav(scrollTop > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const currentDate = new Date(2023, 4, 20); // May is represented as 4 (0-indexed)
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can use the 'name' and 'email' state variables as needed
    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <main style={{ overflow: 'hidden' }}> {/* Apply overflow: hidden to the main container */}
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
            <a href="/"><button>All</button></a>
            </li>
            <li><a href ="/contact">Software Development</a></li>
            <li><a href="/contact">Artificial Intelligence</a></li>
            <li><a href="/contact">Cloud Computing</a></li>
            <li><a href="/contact">Digital Business</a></li>
            <li><a href="/contact">General</a></li>
            <li className="search-button"><a href="/contact">
  <button type="button">
    <svg xmlns="http://www.w3.org/2000/svg" className='Icon-but' width="2" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Search Blog
  </button>
  </a>
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
      
      <section className="subscribe-area" style={{ overflow: 'hidden' }}> {/* Apply overflow: hidden to the main container */}
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
                <form onSubmit={handleSubmit}>
                    <div className="form-inline newsletter" style={{ display: 'flex' }}>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={handleNameChange}
                          style={{ backgroundColor: 'rgba(247, 144, 31, 1)', color: 'rgba(255, 255, 255, 1)', marginTop: '20px', border: 'none', marginRight: '12px',width: '254px',
                          padding: '8px'}}
                        />
                      </div>
                      <div className="form-group formgroup2" style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={handleEmailChange}
                          style={{ borderLeft: '1px solid white', marginLeft: '-10px', marginTop: '20px', backgroundColor: 'rgba(247, 144, 31, 1)', color: 'rgba(255, 255, 255, 1)', borderRadius: '0px', border: 'none' , width: '254px',
                          padding: '8px' }}
                        />
                        <div className='dfgrts' style={{ cursor: 'pointer', backgroundColor: 'rgba(247, 144, 31, 1)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '20px' }}>
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

export default AboutUs;
