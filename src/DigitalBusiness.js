import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImage from './mainImage.png';
import { Link, useLocation  } from 'react-router-dom';
import SearchBar from './SearchBar';
import CustomArticleCard from './CustomArticleCard'; // Adjust the path accordingly
import Gination from './Gination';
import './App.css';



const generateRandomArticles = (count) => {
  const articles = [
   
    {
      id: 1,
      title: 'Your First Article Title',
      content: 'Best Practices for Responsive Web Development ' +
        'in 2023 Tips ' +
        'and Tricks for Success',
      smallImageText: 'DigitalBusiness',
    },  
   
    
    {
      id: 3,
      title: 'July 20, 2024',
      
      content: "Redefining Commerce: The Impact of Digital Business on Industries",
      smallImage: 'talen.png',
      smallImageText: 'DigitalBusinessg ',
    },
     {
      id: 2,
      title: 'July 20, 2024',
      content: 'Innovation in the Digital Age: The Rise of Digital Business Models',
      smallImageText: 'DigitalBusiness ',
    },
    {
      id: 4,
      title: 'July 20, 2024',
      content: "The Tech-Driven Evolution: Adapting Your Business to the Digital Frontier",
      smallImage: 'talen.png',
      smallImageText: ' DigitalBusiness',
    },
    {
      id: 5,
      title: 'July 20, 2024',
      content: "Elevating Customer Experience: The Role of Digital Business in the Marketplace",
      smallImage: 'talen.png',
      smallImageText: ' DigitalBusiness',
    },
    {
      id: 6,
      title: 'July 20, 2024',
      content: "Data-Driven Success: Unleashing the Potential of Digital Business Analytics",
      smallImage: 'talen.png',
      smallImageText: 'DigitalBusiness',
    },
  ];
  
  return articles.slice(0, count); // Limit the number of articles to the specified count
};

const DigitalBusiness = () => {
   
  const [fixedNav, setFixedNav] = useState(false); // Keep this line
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const path = location.pathname;
  

  const articles = generateRandomArticles(6); // Generate 6 random articles

  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    // Implement the search functionality here
    // Update searchResults and showResults accordingly
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
      <div className="content-contaner">
        <div className="text-image-container">
          <div className="text-container">
            <h1 className="main-heading">Welcome to<br/> TALLEN blog</h1>
            <p className="main-paragraph">
              Our experts share insights on software development, digital content creation, Cloud computing, UI/UX design, Mobile App, websites, Artificial Intelligence, digital transformation and more. Stay informed and ahead of the competition. Explore our blog for the latest tech trends.
            </p>
          </div>
          <div className="image-container">
            <img src="https://www.fujitsu.com/global/imagesgig5/report_600x360_tcm100-4454519_tcm100-2750236-32.jpg" alt="Main" className="main-image" />
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
            <Link to="/Home" >Software Development</Link>
            <li><Link to="/ArtificialIntelligence">Artificial Intelligence</Link></li>
            <li><Link to="/CloudComputing">Cloud Computing</Link></li>
            <li><Link to="/DigitalBusiness">Digital Business</Link></li>
            <li><Link to="/General">General</Link></li>
            <li className="search-button">
                <SearchBar onSearch={handleSearch} />
                {showResults && searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map(article => (
                      <li key={article.id}>{article.title}</li>
                    ))}
                  </ul>
                ) : null}
               
              </li>
          </ul>
        </nav>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br />

     {/* Article Cards */}
     {/* Article Cards */}
     <div className="container">
  <div className="row">
    {/* Sample Column 1 */}
    <div className="col-md-4">
  <Link to="https://calendly.com/tallen5/free?hide_gdpr_banner=1&month=2023-11" className="col-content" style={{ backgroundColor: 'rgba(246, 143, 30, 1)', display: 'flex', flexShrink: '0', flexDirection: 'column',textDecoration: 'none' }}>
    <h2 className="col-heading">Explore our services</h2>
    <span className="col-button">Free Consultation</span>
  </Link>
</div>


    {/* Sample Column 2 */}

    
       {/* Sample Column 2 */}
       <div className="col-md-4 custom-div ">
        <CustomArticleCard 
          title={articles[2].title}
          content={articles[2].content}
          to="/Page2"
          image="https://d3lcr32v2pp4l1.cloudfront.net/Pictures/480x270/9/0/6/96906_digitaltravelcmycreative_shutterstock_705398.jpg"
          smallImage={articles[2].smallImage}
          smallImageText={articles[2].smallImageText}
        />
      </div>
   
      {/* Sample Column 3 */}
      <div className="col-md-4 custom-div ">
           <CustomArticleCard
              title={articles[1].title}
              content={articles[1].content}
              to="/contact"
              image="https://airlines.iata.org/sites/default/files/styles/uncropped_small/public/images/analysis-digital-identity-to-redefine-di--web-digital-transformation-credit-metamo.png?itok=Ze5im88N"
              smallImage={articles[1].smallImage}
              smallImageText={articles[1].smallImageText}
            />
      </div>
    </div>

  <br></br><br></br><br></br><br></br><br></br>
    <div className="row">
      {/* Sample Column 4 */}
      <div className="col-md-4 custom-div ">
        <CustomArticleCard
          title={articles[3].title}
          content={articles[3].content}
          to="/UIUXDesignTrends"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4VrsnTG0jRy46aKI4ycNvJCVwZm2gxERy1oE5hqc92U_3bTA2As4i5kwACnzRy7cE_-g&usqp=CAU"
          smallImage={articles[3].smallImage}
          smallImageText={articles[3].smallImageText}
        />
      </div>

      <div className="col-md-4 custom-div ">
        <CustomArticleCard
          title={articles[4].title}
          content={articles[4].content}
          to="/LandingPage"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWodWRvWe-q5Zs6fDmPSEpT2XELtlzuuhhsA&usqp=CAU"
          smallImage={articles[4].smallImage}
          smallImageText={articles[4].smallImageText}
        />
      </div>

      <div className="col-md-4 custom-div ">
        <CustomArticleCard  
          title={articles[5].title}
          content={articles[5].content}
          to="/Page6"
          image="https://www.simplilearn.com/ice9/free_resources_article_thumb/Business_Analytics_vs_Data_Analytics.jpg"
          smallImage={articles[5].smallImage}
          smallImageText={articles[5].smallImageText}
        />
      </div>
    </div>
   
</div><br></br><br></br>
<Gination />

      
      <section className="subscribe-area" style={{ maxHeight: '600px', overflow: 'hidden' }}>
  <div className="container">
    <div className="row footer-container">
      <div className="col-md-4 col-sm-4 col-xs-4">
        <div className="subscribe-text">
          <h2 className="dexx">Stay updated by subscribing to our newsletter</h2>
        </div>
      </div>
      <div className="col-md-8 col-sm-4 col-xs-4 form-item-footer">
        <div className="subscribe-wrapper subscribe2-wrapper" style={{marginLeft:' 330px',marginTop:' -112px'}}>
          <div className="subscribe-form">
            <form onSubmit={handleSubmit}>
              <div className="form-inline newsletter" style={{ display: 'flex'}}>
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

export default DigitalBusiness;