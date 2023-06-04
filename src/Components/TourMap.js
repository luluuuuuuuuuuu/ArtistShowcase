import React, { useState, useEffect, useContext } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { TourMapContext } from '../Context/TourMapContext';
import dotenv from 'dotenv';

dotenv.config();

// Container style for the Google Map
const containerStyle = {
  width: '100%',
  height: '400px'
};

// Component for rendering the map and markers
function TourMap() {
  // State variables
  const [map, setMap] = useState(null);
  const { concerts } = useContext(TourMapContext);
  const [selectedConcert, setSelectedConcert] = useState(null);
  const [userPosition, setUserPosition] = useState(null);

  // Fetch user's geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setUserPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      () => {
        // If the user denies location permission, default to San Francisco
        setUserPosition({
          lat: 37.7749,
          lng: -122.4194
        });
      }
    );
  }, []);

  // Callback function when the map loads
  const onMapLoad = map => {
    setMap(map);
  };

  // Click event handler for markers
  const handleClick = (event, concert) => {
    setSelectedConcert(concert); // Set the selected concert to the clicked concert
  };

  const handleCloseClick = () => {
    setSelectedConcert(null); // Set the selected concert to null, closing the info window
  };

  const getDistance = (position1, position2) => {
    // Calculate the distance between two positions using the Haversine formula
    const lat1 = position1.lat;
    const lng1 = position1.lng;
    const lat2 = parseFloat(position2.latitude);
    const lng2 = parseFloat(position2.longitude);

    // Rest of the code remains the same
    // ...
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDVPoRBFavgFvmLUAnTogVIcjQ2asLRTuY">
      {userPosition && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userPosition} // Use the user's position as the center of the map
          zoom={12} // Set the initial zoom level of the map
          onLoad={onMapLoad} // Callback function when the map is loaded
        >
          {concerts.map(concert => (
            <Marker
              key={concert.id}
              position={{
                lat: parseFloat(concert.venue.latitude),
                lng: parseFloat(concert.venue.longitude)
              }} // Set the position of the marker to the concert's latitude and longitude
              onClick={event => handleClick(event, concert)} // Set the click event handler for the marker
            />
          ))}
          {selectedConcert && (
            <InfoWindow
              position={{
                lat: parseFloat(selectedConcert.venue.latitude),
                lng: parseFloat(selectedConcert.venue.longitude)
              }} // Set the position of the info window to the selected concert's latitude and longitude
              onCloseClick={handleCloseClick} // Set the close event handler for the info window
              zIndex={100} // Set the z-index of the info window
            >
              <div>
                <h3>{selectedConcert.venue.name}</h3>
                <p>{selectedConcert.venue.city}, {selectedConcert.venue.region}, {selectedConcert.venue.country}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </LoadScript>
  );
}

export default TourMap;
