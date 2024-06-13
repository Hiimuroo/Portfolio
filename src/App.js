import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Informations from './Pages/Informations';
import Competences from './Pages/Competences';
import Projets from './Pages/Projets';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header role="banner">
          <Navbar />
        </header>
        <main role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/informations" element={<Informations />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
