import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Home from './Home';
import ContactUs from './ContactUs';
import Terms from './Terms';
import BurgerMenu from './BurgerMenu';

const App = () => {
  return (
    <Router>
      <div className="App">
        <BurgerMenu />
        <Header />

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
