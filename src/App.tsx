import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Furniture from './pages/Services/Furniture';
import Window from './pages/Services/Window';
import Cases from './pages/Cases';
import Partner from './pages/Partner';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Empty from './components/Empty';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services">
          <Route path="furniture" element={<Furniture />} />
          <Route path="window" element={<Window />} />
        </Route>
        <Route path="cases" element={<Cases />} />
        <Route path="partner" element={<Partner />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Empty />} />
      </Route>
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default App;
