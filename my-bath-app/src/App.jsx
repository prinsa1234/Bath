import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Jaquar from './pages/Brands/Jaquar';
import Hindware from './pages/Brands/Hindware';
import Kidlen from './pages/Brands/Kidlen';
import Kohler from './pages/Brands/Kohler';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/brands/jaquar" element={<Jaquar />} />
        <Route path="/brands/hindware" element={<Hindware />} />
        <Route path="/brands/kidlen" element={<Kidlen />} />
        <Route path="/brands/kohler" element={<Kohler />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
