import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<h1>Erreur</h1>} />
          <Route path="/about" element={<h1>erreur</h1>} />
        </Routes>
    </Router>

  );
}

export default App;
