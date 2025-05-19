import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Bookings from './pages/Bookings/Bookings';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import ApartmentDetails from './pages/ApartmentDetails/ApartmentDetails';

import { auth } from './firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

const App = () => {
  const allApartments = [
    { id: 1, title: "Green Valley", address: "вул. Довженка, 10", rooms: 2, price: 1100, img: "./img/ap1.jpg", lat: 49.8397, lng: 24.0297 },
    { id: 2, title: "Sunset Apartments", address: "вул. Шевченка, 22", rooms: 3, price: 1450, img: "./img/ap1.jpg", lat: 49.8420, lng: 24.0265 },
    { id: 3, title: "City View", address: "вул. Грушевського, 5", rooms: 1, price: 950, img: "./img/ap1.jpg", lat: 49.8438, lng: 24.0306 },
    { id: 4, title: "Skyline Residences", address: "вул. Коперника, 18", rooms: 2, price: 1300, img: "./img/ap1.jpg", lat: 49.8412, lng: 24.0350 },
    { id: 5, title: "Lakeside House", address: "вул. Озерна, 8", rooms: 4, price: 1800, img: "./img/ap1.jpg", lat: 49.8450, lng: 24.0282 },
    { id: 6, title: "Central Plaza", address: "пл. Ринок, 1", rooms: 3, price: 2000, img: "./img/ap1.jpg", lat: 49.8390, lng: 24.0315 },
    { id: 7, title: "Cozy Nest", address: "вул. Липова, 12", rooms: 1, price: 800, img: "./img/ap1.jpg", lat: 49.8375, lng: 24.0270 },
    { id: 8, title: "The Grand", address: "вул. Січових Стрільців, 3", rooms: 5, price: 2500, img: "./img/ap1.jpg", lat: 49.8405, lng: 24.0333 },
    { id: 9, title: "Harmony Homes", address: "вул. Замкова, 14", rooms: 2, price: 1200, img: "./img/ap1.jpg", lat: 49.8382, lng: 24.0320 },
    { id: 10, title: "Quiet Retreat", address: "вул. Вернадського, 9", rooms: 3, price: 1350, img: "./img/ap1.jpg", lat: 49.8465, lng: 24.0290 }
];
  const [booked, setBooked] = useState([]);
  const [user, setUser] = useState(null);

  const handleBook = (apartment) => {
    setBooked(prev => [...prev, apartment]);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  return (
    <Router>
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home onBook={handleBook} />} />
        <Route path="/bookings" element={user ? <Bookings booked={booked} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apartment/:id" element={<ApartmentDetails apartments={allApartments} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
