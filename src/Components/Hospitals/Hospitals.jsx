import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Hospitals.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpeg";
import img3 from "../Assets/3.jpeg";
import img4 from "../Assets/4.jpeg";
import img5 from "../Assets/5.jpg";

const hospitalData = [
  { id: 1, name: 'CMC Hospital', address: "Ida Scudder Road, Vellore, Tamil Nadu 632004", contact: "+91 8000338855", lat: 12.9259, lon: 79.1356, image: img1 },
  { id: 2, name: 'Naruvi Hospital', address: "Bangalore Trunk Road, Opp. Hotel Aavana Inn, Vellore, Tamil Nadu 632104", contact: "+91 416 220 6600", lat: 12.944, lon: 79.142, image: img2 },
  { id: 3, name: 'Sri Narayani Hospital & Research Centre', address: "Azad Rd, Thirumalaikodi, Vellore, Tamil Nadu 632055", contact: "+91 416 220 6300", lat: 12.9165, lon: 79.1325, image: img3 },
  { id: 4, name: 'Indira Super Speciality Hospital', address: "No. 18, Officers Line, Vellore, Tamil Nadu 632001", contact: "+91 416 222 2277", lat: 12.9345, lon: 79.1372, image: img4 },
  { id: 5, name: 'Sri Ragavendra Super Speciality Hospital', address: "No. 1, Katpadi Road, Vellore, Tamil Nadu 632007", contact: "+91 416 224 5567", lat: 12.947, lon: 79.159, image: img5 }
];

function Hospitals() {
  const [showHospitals, setShowHospitals] = useState(false);

  return (
    <div className="App">
      <div className='Title'>
       
        {!showHospitals && (<>
           <h2>Find Near By Hospitals</h2>
          <button onClick={() => setShowHospitals(true)} style={{ marginBottom: "20px" }}>
            Click to find
          </button></>
        )}
      </div>
      {showHospitals && (<><h2>Find Near By Hospitals</h2>
          <button onClick={() => setShowHospitals(true)} style={{ marginBottom: "20px" }}>
            Click to find
          </button>
      
          {/**<div className="listings">
            {hospitalData.map(hospital => (
              <div className="listing" key={hospital.id}>
                <img src={hospital.image} alt={`Hospital ${hospital.id}`} />
                <div className="hospital-details">
                  <h2>{hospital.name}</h2>
                  <p><strong>Address:</strong> {hospital.address}</p>
                  <p><strong>Contact:</strong> {hospital.contact}</p>
                </div>
              </div>
            ))}
          </div>**/}

          <MapContainer
            center={[12.935, 79.140]}
            zoom={13}
            style={{ height: "100vh", width: "100%", margin: "auto" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {hospitalData.map(hospital => (
              <Marker
                key={hospital.id}
                position={[hospital.lat, hospital.lon]}
                icon={new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })}
              >
                <Popup>
                  <div className="card">
                    <div className="imageContainer">
                      <img src={hospital.image} alt={`Hospital ${hospital.id}`} />
                    </div>
                    <div className="textContainer">
                      <h2 className="title">{hospital.name}</h2>
                      <p><strong>Address:</strong> {hospital.address}</p>
                      <p><strong>Contact:</strong> {hospital.contact}</p>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </>
      )}
    </div>
  );
}

export default Hospitals;
