import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Gallery from './pages/Gallery';

const AppRouter = () => {
  return (
    <div className="main bg-gradient-to-b from-gray-950 via-black to-gray-900">
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
       <Route path ="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
    </div>
  );
};

export default AppRouter;
