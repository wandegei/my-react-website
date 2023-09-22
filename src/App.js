import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Home from './Home';
import ContactUs from './ContactUs';
import './App.css';
import BurgerMenu from './BurgerMenu'; // Corrected import path

const App = () => {
  return (
    <Router>
      <div className="App">
        <BurgerMenu />
        <Header />
       
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
