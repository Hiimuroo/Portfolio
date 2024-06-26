import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Informations from './Pages/Informations';
import Competences from './Pages/Competences';
import Projets from './Pages/Projets';
import Contact from './Pages/Contact';
import Player from './components/Player';

const App = () => {
  return (
    <div className="app">
      <Player />
      <Router>
        <header role='main'>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/informations" element={<Informations />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
