
import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import './Map.css';

const API_KEY = process.env.REACT_APP_API_KEY

export default function Map () {

  const [center, setCenter] = useState({ lat: 45.390205, lng: 2.154007 });
  const [selectedResto, setSelectedResto] = useState(null);
  const [markerMap, setMarkerMap] = useState({});
  const [infoOpen, setInfoOpen] = useState(false);

  const restos = [
    {
      id: 1,
      name: 'Banana place',
      address: "Carrer d'Àvila, 27, 08005 Barcelona",
      coordinates: { lat: 45.394205, lng: 2.15400725345 }
    },
    {
      id: 2,
      name: 'Ice-cream place',
      address: "Carrer d'Banana, 27, 08005 Barcelona",
      coordinates: { lat: 45.378205, lng: 2.156007231 }
    },
    {
      id: 3,
      name: 'Menssana',
      address: "Carrer d'Àvila, 27, 08005 Barcelona",
      coordinates: { lat: 45.390765, lng: 2.121554007 }
    }
  ];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY
  })

  const markerLoadHandler = (marker, resto) => {
    return setMarkerMap(prevState => {
      return { ...prevState, [resto.id]: marker };
    });
  }

  const markerClickHandler = (event, resto) => {
    setSelectedResto(resto);
    infoOpen ? setInfoOpen(false) : setInfoOpen(true);
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
        zoom={12}
      >
        {restos.map(resto => (
          <Marker
            key={resto.id}
            position={resto.coordinates}
            onLoad={marker => markerLoadHandler(marker, resto)}
            onClick={event => markerClickHandler(event, resto)}
          />
        ))}

        {infoOpen && selectedResto && (
          <InfoWindow
            anchor={markerMap[selectedResto.id]}
            onCloseClick={() => setInfoOpen(false)}
          >
            <div className="InfoWindow">
              <h3>{selectedResto.name}</h3>
              <p>{selectedResto.address}</p>
              <div className="Buttons">
                <SquareBtn
                  className="Take" text="Take"
                />
                <SquareBtn
                  className="Return" text="Return"
                />
              </div>
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
