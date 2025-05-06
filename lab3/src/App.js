import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Bookings from './pages/Bookings/Bookings';

const App = () => {
  const [booked, setBooked] = useState([]);

  const handleBook = (apartment) => {
    setBooked(prev => [...prev, apartment]);
  };


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home onBook={handleBook} />} />
        <Route path="/bookings" element={<Bookings booked={booked} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
