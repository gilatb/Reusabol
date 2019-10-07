import React from 'react';

import './UserHome.css';
import Header from '../Header/Header';
import Map from '../Map/Map'

export default function UserHome () {
  return (
    <div className="user-home">
      <Header />
      <h3>Map container goes here:</h3>
      <Map />
    </div>
  )
}
