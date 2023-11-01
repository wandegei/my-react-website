import React, { useEffect, useRef, useState } from 'react';
import './Blog.css';

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const offset = 90; // Adjust this value as needed
    setIsSticky(window.scrollY > offset);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const colexClass = isSticky ? 'colex sticky' : 'colex';

  return (
    <div>
     <div className={colexClass} ref={headerRef}>
        <ol>
          <h4 style={{
            color: 'rgba(246, 143, 30, 1)',
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '23.44px',
            marginLeft: '90px'
          }}>
            Introduction
          </h4>
          <li>
            <a href="#personalized-user-experiences" className="smooth-scroll" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="column-heading">Share</span> User Experiences <br />
              <span style={{ marginLeft: '20px' }}> (UX)</span>
            </a>
          </li>
          <li>
            <a href="#integration-of-ai-and-machine-learning" className="smooth-scroll" style={{ textDecoration: 'none', color: 'inherit' }}>
              Integration of AI and Machine<br />
              <span style={{ marginLeft: '20px' }}>Learning</span>
            </a>
          </li>
          <li>
            <a href="#inclusive-and-accessible-design" className="smooth-scroll" style={{ textDecoration: 'none', color: 'inherit' }}>
              Inclusive and Accessible Design
            </a>
          </li>
          <li>
            <a href="#personalized-user-experiences" className="smooth-scroll" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="column-heading">Share</span> User Experiences <br />
              <span style={{ marginLeft: '20px' }}> (UX)</span>
            </a>
          </li>
            <li>
          <a href="#inclusive-and-accesible-design" className="smooth-scroll" style={{ textDecoration: 'none', color: 'inherit' }}>
            Inclusive and Accessible Design
          </a>
        </li>
        <li>
          <a href="#simplified-user-interfaces-ui" className="smooth-scroll" style={{ textDecoration: 'none', color: 'inherit' }}>
            Simplified User Interfaces (UI)
          </a>
        </li>
        <li>
          <a href="#use-of-advanced-animations-and-transition" className="smooth-scroll" style={{ textDecoration: 'none', color: 'inherit' }}>
            Use of Advanced Animations and<br />
            <span style={{ marginLeft: '20px' }}>Transition</span>
          </a>
        </li>
        <li>
          <a href="#gamification-and-interactive-design" className="smooth-scroll" style={{ textDecoration: 'none', color: 'inherit' }}>
            Gamification and Interactive<br />
            <span style={{ marginLeft: '20px' }}>Design</span>
          </a>
        </li>
        <li>
          <a href="#gggg" className="smooth-scroll" style={{ textDecoration: 'none', color: 'inherit' }}>
            3D and Holographic Design<br />
            <span style={{ marginLeft: '20px' }}>Elements</span>
          </a>
        </li>
          
          {/* Add other list items here */}
          <button id="backToTop" style={{ marginTop: '10px', backgroundColor:'rgba(246, 143, 30, 1)', marginLeft: 'auto', marginRight: 'auto', borderRadius: '3px',width: '159px',border: 'none' }} onClick={scrollToTop}>
            Back to top
          </button>
        </ol>
      </div>
    </div>
  );
};

export default StickyHeader;
