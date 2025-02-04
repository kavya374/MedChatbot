import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Use environment variable for security
const mapContainerStyle = { width: "100%", height: "500px" };
const velloreCenter = { lat: 12.9165, lng: 79.1325 }; // Coordinates for Vellore

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetchNearbyHospitals(velloreCenter.lat, velloreCenter.lng);
  }, []);

  const fetchNearbyHospitals = async (lat, lng) => {
    try {
      const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=hospital&key=${API_KEY}`;
      const response = await fetch(placesUrl);
      const data = await response.json();
      if (data.status === "OK" && data.results) {
        setHospitals(data.results);
      } else {
        console.error("Error fetching hospitals:", data.status);
      }
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY} libraries={["places"]}>
      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        center={velloreCenter} 
        zoom={14}
      >
        {hospitals.map((hospital, index) => (
          <Marker
            key={index}
            position={{ lat: hospital.geometry.location.lat, lng: hospital.geometry.location.lng }}
            title={hospital.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Hospitals;
