import React from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';

const Kenya = () => {
  // const kenyaCoordinates = [-1.2921, 36.8219]; // Coordinates for the center of Kenya
  // const centralCircleRadius = 350 * 1000; // 350 kilometers in meters (adjust as needed)
  const kenyaCoordinates = [0.4000, 38.0000]; // New central coordinates (adjust as needed)
  const centralCircleRadius = 341 * 1000; // 450 kilometers in meters (adjust as needed)

  return (
    <MapContainer
      center={kenyaCoordinates}
      zoom={6}
      style={{ height: '300px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Circle
        center={kenyaCoordinates}
        radius={centralCircleRadius}
        pathOptions={{ color: '#4096ff', fillColor: '#4096ff', fillOpacity: 0.2 }}
      >
        <Popup className='text-sm font-sans font-semibold'>We are available for services countrywide</Popup>
      </Circle>
    </MapContainer>
  );
};

export default Kenya;