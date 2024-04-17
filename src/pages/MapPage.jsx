import React from 'react';
import MapImage from '../assets/map.png';
import './Map.css';

function MapPage() {
  return (
    <div className="mapContainer">
      <h1>MAP</h1>
      <img src={MapImage} alt="Map" className="mapImage" />
      <button className="goButton">GO</button>
    </div>
  );
}

export default MapPage;
