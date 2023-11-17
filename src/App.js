import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Home from './Home';
import ContactUs from './ContactUs';
import Terms from './Terms';
import BurgerMenu from './BurgerMenu';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import TodoList from './TodoList';
import SoftwareDevelopmentDescription from './SoftwareDevelopmentDescription';
import SoftwareDevelopmentIntro from './SoftwareDevelopmentIntro';
import SoftwareEngineeringPotential from './SoftwareEngineeringPotential';
const App = () => {
  return (
    <Router>
      <div className="App">
        <BurgerMenu />
        <Header />

        {/* Navigation Menu */}
        <nav style={{ display: 'none' }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />
          <Route path="/Page5" element={<Page5 />} />
          <Route path="/Page6" element={<Page6 />} />
          <Route path="/Page7" element={<Page7 />} />
          <Route path="/Page8" element={<Page8 />} />
          <Route path="/Page9" element={<Page9 />} />
          <Route path="/TodoList" element={<TodoList />} />
         <Route path="/SoftwareDevelopmentIntro" element={<SoftwareDevelopmentIntro />} />
          <Route path="/softwaredevelpment" element={<softwaredevelpment />} />
          <Route path="/SoftwareDevelopmentDescription" element={<SoftwareDevelopmentDescription />} />
          <Route path="/softwaredevelopment/page2" element={<Page2 />} />
          <Route path="/SoftwareEngineeringPotential" element={<SoftwareEngineeringPotential />} />
      </Routes>
      
        <Footer />
      </div>
    </Router>
  );
};

export default App;
