// Map.js
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import ambulance from "../assets/ambulance.png"

const Map = ({location}) => {
    const [coordinates, setCoordinates] = useState([-1.286389, 36.817223]);
    const [map, setMap] = useState();

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


    if (map && location) {
      console.log("Map ref ", map)
      map.setView(location, 15); // Set the map's center to the new location
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
    {location && 
    <div className='flex flex-col'>
    <div className='w-full flex justify-end items-center'>
      <button
    className='rounded-lg bg-blue-100 px-4 py-1 text-black font-semibold z-20 font-sans'
    onClick={()=>{
      console.log("This is mapref")
      map.flyTo(location, 17)
    }}>Recenter Map</button></div>
    <MapContainer
    
    ref={setMap}
    center={location} zoom={15} style={{ height: '400px' }}>
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
    </MapContainer>
    </div>
    }
    </>
  );
};

export default Map;


// import React, { useEffect, useState, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import ambulance from "../assets/ambulance.png";

// const Map = ({ location }) => {
//   const [center, setCenter] = useState(location); // Initialize center with the provided location
//   const mapRef = useRef(null); // Create a ref to hold the map instance

//   const customIcon = new L.Icon({
//     iconUrl: ambulance,
//     iconSize: [32, 32],
//     iconAnchor: [16, 16],
//   });

//   useEffect(() => {
//     if (mapRef.current && location) {
//       // Set the map's center to the new location
//       // mapRef.current.leafletElement.setView(location, 13);
//       setCenter(location); // Update the center state with the new location
//     }
//   }, [location]);

//   // Function to recenter the map
//   const recenterMap = () => {
//     // if (mapRef.current && center) {
//     //   // Recenter the map to the stored center coordinates
//     //   mapRef.current.leafletElement.setView(center, 13);
//     // }
//   };

//   return (
//     <>
//       {location && (
//         <div>
//           <MapContainer
//             ref={mapRef} // Store a reference to the map
//             center={center} // Use the center state for the initial center
//             zoom={15}
//             style={{ height: '400px' }}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//             <Marker key={1} position={location}>
//               <Popup>Your location</Popup>
//             </Marker>
//           </MapContainer>
//           <button onClick={recenterMap}>Recenter Map</button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Map;