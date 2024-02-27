import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

const MapComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [map, setMap] = useState(null); // State for the map

  useEffect(() => {
    // Fetch data asynchronously and update the state
    const fetchData = async () => {
      try {
        // Fetch your data (replace the following line with your actual fetching logic)
        const response = await fetch('https://api.findofficers.com/hiring_test/get_all_employee');
        const result = await response.json();

        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    // Initialize the map only once when the component mounts
    if (!map) {
      const newMap = L.map('map').setView([0, 0], 2);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(newMap);

      setMap(newMap);
    }

    return () => {
      // Clean up map when the component unmounts
      if (map) {
        map.remove();
      }
    };
  }, [map]); // Dependency array includes 'map'

  useEffect(() => {
    // Update map markers when data changes
    data.forEach((point) => {
      const { latitude, longitude, firstName, lastName } = point;

      if (!isNaN(parseFloat(latitude)) && !isNaN(parseFloat(longitude))) {
        // Define a custom icon for the marker
        const customIcon = L.icon({
          iconUrl: 'https://e7.pngegg.com/pngimages/396/299/png-clipart-google-maps-pin-google-map-maker-pin-google-location-logo-angle-heart-thumbnail.png',
          iconSize: [32, 50], // Size of the icon
          iconAnchor: [16, 32], // Point of the icon that corresponds to the marker's location
          popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
        });

        L.marker([parseFloat(latitude), parseFloat(longitude)], { icon: customIcon }).addTo(map)
          .bindPopup(`${firstName} ${lastName}`);
      } else {
        console.warn(`Invalid LatLng values for ${firstName} ${lastName}: (${latitude}, ${longitude})`);
      }
    });
  }, [data, map]);

  return (
    <div id="map" style={{ height: '500px' }}>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data. Please try again later.</p>}
    </div>
  );
};

export default MapComponent;
