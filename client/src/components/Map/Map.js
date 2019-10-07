
import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

import './Map.css';

const API_KEY = process.env.REACT_APP_API_KEY

export default function Map () {

  const [center, setCenter] = useState({ lat: 45.390205, lng: 2.154007 });
  const [selectedResto, setSelectedResto] = useState(null);
  

  const restos = [
    { id: 1, pos: { lat: 45.394205, lng: 2.15400725345 } },
    { id: 2, pos: { lat: 45.378205, lng: 2.156007231 } },
    { id: 3, pos: { lat: 45.390765, lng: 2.121554007 } }
  ];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY
  })

  const renderMap = () => {
    return (
      <GoogleMap
        id="google-map"
        mapContainerStyle={{
          height: "70vh",
          width: "100%"
        }}
        center={center}
        zoom={12}
      >
        {restos.map(resto => (
          <Marker
            key={resto.id}
            position={resto.pos}
            onClick={() => setSelectedResto(resto)} // will trigger useEffect of selectedResto
          />
        ))}

        {selectedResto && (
          <InfoWindow
            // anchor={selectedResto.id} //TODO: 
            position={selectedResto.pos}
            onCloseClick={() => setSelectedResto(null)}
          >
            <div>
              <h3>{selectedResto.id}</h3>
              <div>This is your info window content</div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <p>Waiting for map to arrive</p> // <Spinner />
}
