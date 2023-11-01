import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImage from './mainImage.png';
import { Link } from "react-router-dom";
import Rectangl from './Rectangl.png';
import man from './man.png';
import SearchBar from './SearchBar';

const articles = [
  { id: 1, title: 'Sample Article 1' },
  { id: 2, title: 'Sample Article 2' },
  { id: 3, title: 'Another Article3' },
  { id: 4, title: 'Another Article4' },
  { id: 4, title: 'Another Article7' },
  { id: 5, title: 'Joshua' },
  { id: 6, title: 'Wandegei' },
  { id: 7, title: '@tallen.tech' },
  // ... more articles
];

const handleSearch = (query) => {
  // Implement your search logic here
  const results = articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );

  // Update search results in the state
  
};
const ArticleCard = ({ date, to }) => (
  <div className="col-md-4">
    <Link to={to} className='custom-link'>
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
            <Link to={to}>
              <img src={man} alt="Mark Matovu" className="author-image" />
            </Link>
            <p className="author-name">Mark Matovu</p>
          </div>
        </div>
        <p className="title">
          Revolutionize Your Business: How to Create a Winning Digital Transformation Strategy That Works
        </p>
      </div>
    </Link>
  </div>
);

const MainContent = () => {
  const [fixedNav, setFixedNav] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (query) => {
    const results = articles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
    setShowResults(true);
  };
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
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || email.trim() === '') {
      setError('Please fill out both name and email fields.');
    } else {
      // Handle form submission logic here
      console.log(`Name: ${name}, Email: ${email}`);
      setError('');
    }
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
        <div id="top-space" style={{ height: '8px', marginBottom:'-20px' }}></div>
        <nav>
          <ul className="headers">
            <li className="all-button">
              <Link to="/Home"><button>All</button></Link>
            </li>
            <li><Link to="/Page6">Software Development</Link></li>
            <li><Link to="/Page7">Artificial Intelligence</Link></li>
            <li><Link to="/Page8">Cloud Computing</Link></li>
            <li><Link to="/Page9">Digital Business</Link></li>
            <li><Link to="/Home">General</Link></li>
            <li className="search-button">
            <SearchBar onSearch={handleSearch} />
            {showResults && searchResults.length > 0 ? (
              <ul>
                {searchResults.map(article => (
                  <li key={article.id}>{article.title}</li>
                ))}
              </ul>
            ) : null}
            {showResults && searchResults.length === 0 && <p>No results found.</p>}
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
              <Link to="/services" className="col-button">Our Services</Link>
            </div>
          </div>

          <ArticleCard date={currentDate} to="/Page1" />
          <ArticleCard date={currentDate} to="/Page2" />
        </div>
        <br /><br />
        <div className="row">
        <ArticleCard date={currentDate} to="/Page3" />
        <ArticleCard date={currentDate} to="/Page4" />
        <ArticleCard date={currentDate} to="/Page5" />
        </div>
      </div>
      
      <section className="subscribe-area" style={{ maxHeight: '600px', overflow: 'hidden' }}>
  <div className="container">
    <div className="row footer-container">
      <div className="col-md-4 col-sm-4 col-xs-4">
        <div className="subscribe-text">
          <h2 className="dexx">Stay updated by subscribing to our newsletter</h2>
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
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div className="form-group formgroup2" style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                  />
                  <button type="submit" style={submitButtonStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M16.59 11H4v2h12.59l-3.29 3.29L14 18l6-6-6-6-1.29 1.29L16.59 11z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};
const inputStyle = {
  backgroundColor: 'rgba(247, 144, 31, 1)',
  color: 'rgba(255, 255, 255, 1)',
  marginTop: '20px',
  border: 'none',
  marginRight: '12px',
  width: '254px',
  padding: '8px',
  border:'none',
  marginLeft: '-10px',
};

const submitButtonStyle = {
  cursor: 'pointer',
  backgroundColor: 'rgba(247, 144, 31, 1)',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '20px',
  border:'none',
};

export default MainContent;
