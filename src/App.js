import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
      <Route exact path="/" element={<MainContent />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
