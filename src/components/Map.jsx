// Map.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import ambulance from "../assets/ambulance.png"

const Map = () => {
    const [coordinates, setCoordinates] = useState([-1.286389, 36.817223]);
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([
        { position: [-1.286389, 36.817223] }, // Nairobi CBD
        { position: [-1.292065, 36.821946] }, // Nairobi Railway Station
        { position: [-1.279999, 36.826962] }, // Uhuru Park
        { position: [-1.288592, 36.822292] }, // National Museum
        { position: [-1.301964, 36.821769] }, // Nairobi National Park
      ]);


    const customIcon = new L.Icon({
        iconUrl: ambulance,
        iconSize: [32, 32], // Adjust the size according to your icon
        iconAnchor: [16, 16], // Center the icon on the marker's position
      });

      useEffect(() => {
        if (map && markers.length > 0) {
          // Calculate bounds based on marker positions
          const bounds = markers.reduce(
            (acc, marker) => acc.extend(marker.getLatLng()),
            L.latLngBounds()
          );
    
          // Set the map's center and zoom level to fit all markers
          map?.fitBounds(bounds);
        }
      }, [map, markers]);
    

    // Simulate changing coordinates
    useEffect(() => {
      const updateCoordinates = () => {
        // Simulate coordinates changing (e.g., from a GPS or real-time data source)
        const newLatitude = coordinates[0] + 0.00001; // Example: Increment latitude
        const newLongitude = coordinates[1] + 0.00001; // Example: Increment longitude
        setCoordinates([newLatitude, newLongitude]);
      };
  
      // Update coordinates at a regular interval (e.g., every second)
      const intervalId = setInterval(updateCoordinates, 1000);
  
      return () => clearInterval(intervalId);
    }, [coordinates]);



  return (
    <MapContainer whenCreated={(m) => setMap(m)} center={coordinates} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <Marker position={coordinates} icon={customIcon}>
        <Popup>
          Your location
        </Popup>
      </Marker> */}

    {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          {/* You can customize the markers here */}
          <Popup>
          Your location
        </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;