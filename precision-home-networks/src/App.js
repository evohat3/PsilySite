import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Navbar  from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter >
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />
      </Routes>

      <Footer />


    </BrowserRouter>
  );
}

export default App;
