
import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';

import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import './Map.css';
import { userTransaction } from '../../redux/actions/transaction';
import { getRestos } from '../../redux/actions/restos';

const API_KEY = process.env.REACT_APP_API_KEY

function Map ({ userTransaction, getRestos, restos, userData }) {

  const [location, setLocation] = useState({ lat: 42.076613, lng: 2.362239833 });
  const [selectedResto, setSelectedResto] = useState(null);
  const [markerMap, setMarkerMap] = useState({});
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    getRestos()
  }, [])

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

  const transactionClickHandler = (e) => {
    const reqBody = {
      restoId: selectedResto._id, 
      userId: '5da02d3e25565abaa38f9914', //FIXME: make dynamic
      exchangeType: e.target.innerHTML 
    }
    userTransaction(reqBody)  
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      }, (err) => {
        console.log(err);
      });
    }
    // eslint-disable-next-line
  }, [])

  const renderMap = () => {
    return (
      <GoogleMap
        id="google-map"
        mapContainerStyle={{
          height: "70vh",
          width: "100%"
        }}
        center={location}
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
                  className="Take"
                  text="Take"
                  onClick={transactionClickHandler}
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

const mapStateToProps = (state) => {
  return { 
    userData: state.user.userData,
    restos: state.restos.restos,
  }
}

const mapDispatchToProps = (dispatch) => ({
  userTransaction: (reqBody) => dispatch(userTransaction(reqBody)),
  getRestos: () => dispatch(getRestos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
