
import React, { useState } from 'react';
import './Blog.css';
import './App.css';
import Breadcrumbs from './Breadcrumbs';
import YourComponent from './YourComponent';
import CollaborationSection from './CollaborationSection';
import UpdatedSocialIconsStyles from './UpdatedSocialIconsStyles';

import './page.css';
import LandingPageTips from './LandingPageTips';
import LandingPageNavigation from './LandingPageNavigation';


const LandingPage = () => {
  const [] = useState(false);


 
 


  const aboutContent = (
    <div>
      <div className="ain">
     
      {/* <div className="eres">
        <p className="dat">May 20, 2023</p>
        
        <div className="max">
          <img src="{tallen}" alt="Tallen" className="emma-image" />
          <p className="js">TALLEN</p>
        </div>
      </div> */}
      <div>
        <img src="https://athemes.com/wp-content/uploads/thegem-landing-page-wordpress-theme-768x589.jpg" alt="Mark Matovu" className="lex" />
      </div>
    </div>
    <div className="containerTopInner">
  <div className="reloxs">
  <div className="col-container">
    <UpdatedSocialIconsStyles/>
  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
  
      <LandingPageNavigation/>
  
  </div>
  <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
  <div className="post-content">
      <LandingPageTips />
    </div>
    </div>
      {/* Additional HTML snippet */}
  </div>
  </div>
  </div><br></br><br></br><br></br>
     
      <div className="JOSH">
      <h1 className='blakbn'>Spread the Word, Share the Blog</h1>
      <p className='fasdfcc' >We hope you found this blog on building effective landing pages insightful and valuable for your marketing endeavours. Have enjoyed reading this blog? Please share with your friends, colleagues, or relatives who might also benefit from this information. You can help others enhance their landing page strategies and achieve better conversion rates by spreading the word.</p>
      <YourComponent />
     
      <h1 className='blakbn'>Join Us and Stay Connected</h1>
      <p className='fasdfcc'>To stay connected and receive regular updates on UI/UX design, and other exciting tech insights, we invite you to follow and subscribe to our social media platforms and be part of the discussion!</p>
      <ul className="sociall-links">
        <li className='liksf'>Follow us on Facebook: <a href="https://www.facebook.com/Tallen4Tech" style={{ textDecoration: 'underline', color: 'rgba(246, 143, 30, 1)' }}>TALLEN on Facebook</a></li>
        <li className='liksf'>Follow us on Twitter: <a href="https://twitter.com/Tallen4Tech" style={{ textDecoration: 'underline', color: 'rgba(246, 143, 30, 1)' }}>TALLEN on Twitter</a></li>
        <li className='liksf'>Connect with us on LinkedIn: <a href="https://www.linkedin.com/company/82058798/admin/feed/posts/" style={{ textDecoration: 'underline', color: 'rgba(246, 143, 30, 1)' }}>TALLEN on LinkedIn</a></li>
      </ul>
      <h1 className='blakbn'>Let's Collaborate, Unlock Success</h1>
      <p className='fasdfcc'>At <a href="https://tallen.tech/service" style={{ textDecoration: 'underline', color: 'rgba(246, 143, 30, 1)' }}>TALLEN</a>, we're excited to offer professional and reliable UI/UX design services to help elevate your brand. Our global team of experts specializes in UI/UX design, web development, mobile app development, digital marketing, and digital content creation. We will gladly partner with you to partner with us. We invite you to <a href="https://calendly.com/tallen5/free?hide_gdpr_banner=1&month=2023-11" style={{ textDecoration: 'underline', color: 'rgba(246, 143, 30, 1)' }}>Get Started</a> today by requesting for a service! We aim to help your business thrive in the digital landscape and provide users with engaging experiences.</p>
      <CollaborationSection />
      </div> <br></br><br></br>
      <div>
   
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
     
      </div>
      {/* Add more HTML snippets here */}
    </div>
  );


  return (
  <div>
     <Breadcrumbs path="/your-path" heading="  Building an Eff..." />
      <div className="ner" style={{ position: 'sticky', top: '0' }}>
      <h1 id="software-development-heading" className='Trends' style={{
        textIndent: '10px',
        lineHeight: 1.0,
        marginTop: '-222px',
        fontFamily: 'Font Suisse Works',
        fontWeight: 600,
        fontSize: '30px',
        paddingLeft: '206px'
      }}>
        Building an Effective Landing Page:  Best <br />
        <span>Top Practices for Design</span><br />
        <span style={{ paddingLeft: '50px' }}>and Optimization</span>
      </h1>
       
    </div>
   

    {aboutContent}
    </div>
  );
};


export default LandingPage;


