import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Home from './Home'; // Import the Home component
import ContactUs from './ContactUs'; // Import the ContactUs component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" component={MainContent} /> {/* Example: Render MainContent for the default route */}
          <Route path="/home" component={Home} /> {/* Route for the Home component */}
          <Route path="/contact" component={ContactUs} /> {/* Route for the ContactUs component */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};








export default App;
