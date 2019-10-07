import React from 'react';

import './UserLandpage.css';
import Header from '../Header/Header';
import Map from '../Map/Map'
export default function UserLandpage () {
  return (
    <div className="user-landpage">
      <Header />
      <h3>Map container goes here:</h3>
      <Map />
    </div>
  )
}
