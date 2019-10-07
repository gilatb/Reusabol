
import React, { useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

import './Map.css';

const API_KEY = process.env.REACT_APP_API_KEY

export default function Map () {

  const [center, setCenter] = useState({lat: 45.390205,lng: 2.154007});

  const myPlaces = [
    { id: "place1", pos: { lat: 39.09366509575983, lng: -94.58751660204751 } },
    { id: "place2", pos: { lat: 39.10894664788252, lng: -94.57926449532226 } },
    { id: "place3", pos: { lat: 39.07602397235644, lng: -94.5184089401211 } }
  ];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY
  })

  const onMapLoad = map => {
    console.log('map.data: ', map.data)
  }

  const renderMap = () => {
    return (
      <GoogleMap
        id="google-map"
        mapContainerStyle={{
          height: "70vh",
          width: "100%"
        }}
        center={center}
        zoom={10}
        onLoad={onMapLoad}
      >
        {
          // ...Your map components
        }
      </GoogleMap>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <p>Waiting for map to arrive</p> // <Spinner />
}

