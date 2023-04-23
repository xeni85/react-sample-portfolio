import React from 'react';
import {Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import IndexPage from './pages/IndexPage';
import './App.css'

function App() {
  return (

          <Routes>
          <Route path="/about" element= {<AboutPage />} />
          <Route path='/' element= {<IndexPage />} />
          <Route path="/portfolio" element= {<PortfolioPage />} />
          </Routes>
  );
}

export default App;
