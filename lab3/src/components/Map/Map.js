import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ apartments }) => {
    useEffect(() => {
      const map = L.map('map').setView([49.8397, 24.0297], 13);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
  
      apartments.forEach(apt => {
        const marker = L.marker([apt.lat, apt.lng]).addTo(map);
        marker.bindPopup(`
          <b>${apt.title}</b><br>
          Адреса: ${apt.address}<br>
          Кімнат: ${apt.rooms}<br>
          Ціна: ${apt.price} грн<br>
          <img src="${apt.img}" width="100">
        `);
      });
  
      return () => map.remove(); // Clean-up
    }, [apartments]);
  
    return <div id="map" style={{ height: '500px', width: '100%' }} />;
};

export default Map