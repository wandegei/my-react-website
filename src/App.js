import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Home from './Home';
import ContactUs from './ContactUs';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li className='ddss'><Link to="/">Main</Link></li>
            <li className='ddss'><Link to="/home">Home</Link></li>
            <li className='ddss'><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
