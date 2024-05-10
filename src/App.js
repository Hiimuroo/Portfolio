// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Informations from './components/Informations';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informations" element={<Informations />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
