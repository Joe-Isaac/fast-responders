import React from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';

const Zones = () => {
    const zones = [
        { name: 'Kasarani', lat: -1.2254, lon: 36.9041 },
        { name: 'Athi River', lat: -1.4566, lon: 36.9788 },
        { name: 'Murang\'a', lat: -0.7210, lon: 37.1505 },
        { name: 'Machakos', lat: -1.5222, lon: 37.9382 },
        { name: 'Kiambu', lat: -1.1714, lon: 36.8356 },
        { name: 'Thika', lat: -1.0362, lon: 37.0720 },
        { name: 'Nairobi', lat: -1.286389, lon: 36.817223 },
        { name: 'Karen', lat: -1.3158, lon: 36.6818 },
        { name: 'Muthaiga', lat: -1.2527, lon: 36.8218 },
      ];
      
    
      

  return (
    <MapContainer
      center={[-1.286389, 36.817223]}
      zoom={9}
      style={{ height: '300px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {zones.map((zone, index) => (
        <Circle
          key={index}
          center={[zone.lat, zone.lon]}
          pathOptions={{ color: '#4096ff', fillColor: '#4096ff', fillOpacity: 0.5 }}
          radius={5000} // Adjust the radius as needed (in meters)
        >
          <Popup>{zone.name}</Popup>
        </Circle>
      ))}
    </MapContainer>
  );
};

export default Zones;
