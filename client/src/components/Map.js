
import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_API_KEY

export default function Map () {
  const { isLoaded, loadError } = useLoadScript({

    googleMapsApiKey: API_KEY // ,
    // ...otherOptions
  })

  const onMapLoad = map => {
    console.log('map.data: ', map.data)
  }

  const renderMap = () => {
    return (
      <GoogleMap
        id="google-map"
        mapContainerStyle={{
          height: "400px",
          width: "800px"
        }}
        center={{
          lat: 45.390205,
          lng: 2.154007
        }}
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

