import React from 'react';
import logo from '../../../assets/logo-white.png';

export default function Image({ alt }) {
  return (
    <div>
      <img src={logo} alt="Logo" className="header-logo" style={{height: '9vh'}}/>
    </div>
  )
}
