// Map.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import ambulance from "../assets/ambulance.png"

const Map = ({location}) => {
    const [coordinates, setCoordinates] = useState([-1.286389, 36.817223]);
    const [map, setMap] = useState(null);

    const customIcon = new L.Icon({
        iconUrl: ambulance,
        iconSize: [32, 32], // Adjust the size according to your icon
        iconAnchor: [16, 16], // Center the icon on the marker's position
      });

      // useEffect(() => {
      //   if (map && markers.length > 0) {
      //     // Calculate bounds based on marker positions
      //     const bounds = markers.reduce(
      //       (acc, marker) => acc.extend(marker.getLatLng()),
      //       L.latLngBounds()
      //     );
    
      //     // Set the map's center and zoom level to fit all markers
      //     map?.fitBounds(bounds);
      //   }
      // }, [map, markers]);

      // Update the map bounds whenever the location changes
  // Update the map center whenever the location changes
  useEffect(() => {
    console.log("This is map ", map);
    console.log("This is location ", location)


    if (map && location) {
      console.log("Map should recalibrate");
      map.setView(location, 13); // Set the map's center to the new location
    }
    
  }, [map, location]);
    

    // Simulate changing coordinates
    // useEffect(() => {
    //   const updateCoordinates = () => {
    //     // Simulate coordinates changing (e.g., from a GPS or real-time data source)
    //     const newLatitude = coordinates[0] + 0.00001; // Example: Increment latitude
    //     const newLongitude = coordinates[1] + 0.00001; // Example: Increment longitude
    //     setCoordinates([newLatitude, newLongitude]);
    //   };
  
    //   // Update coordinates at a regular interval (e.g., every second)
    //   const intervalId = setInterval(updateCoordinates, 1000);
  
    //   return () => clearInterval(intervalId);
    // }, [coordinates]);



  return (
    <>
    {location && <MapContainer whenCreated={(m) => {
      console.log("This should set the map instance ", m);
      setMap(m);
    }} center={location} zoom={15} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />   
        <Marker key={1} position={location}>
          {/* You can customize the markers here */}
          <Popup>
          Your location
        </Popup>
        </Marker>

    </MapContainer>}
    </>
  );
};

export default Map;