
import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import SearchBar from "./SearchBar"; // Make sure to import SearchBar from the correct path
import './page.css';

const Page2 = () => {
  const location = useLocation();
  const path = location.pathname;
  const [fixedNav] = useState(false); // Define fixedNav state

  const handleSearch = () => {
    // Implement the search functionality here
    // Update searchResults and showResults accordingly
  };

  const showResults = true; // Define the default value for showResults
  const searchResults = []; // Define the default value for searchResults

  return (
    <div className="container">
      <div className="row">
      <div className={`general ${fixedNav ? 'fixed-nav' : ''}`}>
      <div id="top-space" style={{ height: '8px', marginBottom: '-20px' }}></div>
      
      <nav>
        <ul className="headaxxrs">
          <li className={`all-button ${path === '/Home' ? 'active' : ''}`}>
            <Link to="/Home"><button>All</button></Link>
          </li>
          <li className={path === '/page2' ? 'active' : ''}>
            <Link to="/page2">Software Development</Link>
          </li>
          <li className={path === '/page1' ? 'active' : ''}>
            <Link to="/contact">Artificial Intelligence</Link>
          </li>
          <li className={path === '/' ? 'active' : ''}>
            <Link to="/">Cloud Computing</Link>
          </li>
          <li className={path === '/' ? 'active' : ''}>
            <Link to="/">Digital Business</Link>
          </li>
          <li className={path === '/' ? 'active' : ''}>
            <Link to="/">General</Link>
          </li>
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

        <div className="article">
            <h2 className="page-heading">Best Practices for Responsive Web Development in 2023</h2>
            <p>
              Explore responsive web development with a mobile-first approach, optimized media, responsive frameworks, and a focus on speed. Ensure compatibility by testing on multiple devices, leverage Progressive Web Apps, and employ media queries for adaptive design. Consider partnering with a professional web development agency for expert solutions.
            </p>

          </div>

          <div className="row">
        <div className="col-md-4">
          <Link to="/SoftwareDevelopmentIntro">
            <img src="fifth.png" alt="Image 1" className="column-image" />
          </Link>
          <p className="column-paragraph">
            Dive into <span className="highlight">software development</span>, where creativity meets precision. Craft robust applications with cutting-edge technologies, ensuring seamless user experiences and efficient functionalities.
          </p>
        </div>

        <div className="col-md-4">
          <Link to="/SoftwareDevelopmentDescription">
            <img src="first.png" alt="Image 2" className="column-image" />
          </Link>
          <p className="column-paragraph">
            In the realm of <span className="highlight">software creation</span>, every line of code tells a story. Embrace the art of coding to build scalable solutions, incorporating the latest industry standards for optimal performance.
          </p>
        </div>

        <div className="col-md-4">
          <Link to="/SoftwareEngineeringPotential">
            <img src="third.jpg" alt="Image 3" className="column-image" />
          </Link>
          <p className="column-paragraph">
            Unlock the potential of <span className="highlight">software engineering</span>. From concept to execution, navigate the development landscape with precision, leveraging innovative methodologies for robust and reliable software solutions.
          </p>
        </div>

        
      </div>



          <h2 className="article-heading">Spread the Knowledge, Share the Value</h2>
          <p>
            We hope you found this blog insightful and valuable for your web development practice. Have enjoyed reading this blog? Please share with your friends, colleagues, or relatives who might also benefit from this information. You can help others enhance their web development capabilities by spreading the word.
          </p>

          <h2 className="article-heading">Stay Connected, and Never Miss a Beat</h2>
          <p>
            Remember to stay connected with us on our social media platforms to receive regular updates on marketing tips, industry insights, and more. Follow us on Twitter, LinkedIn, Facebook, and YouTube. We appreciate and would love to connect with you on these platforms.
          </p>

          <h2 className="article-heading">Let's Grow Together, Unlock Your Potential</h2>
          <p>
            At TALLEN, we specialize in web and mobile app development, digital content creation, and digital marketing solutions. Whenever you are looking to partner with a reliable and experienced team for your web development project or if you require assistance with any other aspect of your online presence, consider partnering with us. We invite you to Get Started today by requesting for a service! Our dedicated professionals are passionate about helping businesses succeed in the digital landscape. Don't hesitate to Contact Us for free consultations or any inquiries.
          </p>

          <h2 className="article-heading">We appreciate the time you took to read our blog. We can’t wait to support your efforts in building responsive websites and achieving your business goals.</h2>
        
      </div>
    </div>
  );
};

export default Page2;
