

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import SearchResults from './pages/SearchResults';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';


function App() {
  return (
    
    <Router>
      <div className="App">
       
        <Navbar />
        
       
        <Routes>
        
         
          <Route path="/" element={<Home />} />
          
         
          <Route path="/movie/:id" element={<MovieDetail />} />
          
          
          <Route path="/search" element={<SearchResults />} />
          
          
          <Route path="/about" element={<About />} />
          
         
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;