import React from 'react';

import './Login.css';
import logo from '../../assets/logo+slogan.png';


export default function Login () {
  return (
    <div>
      <img src={logo} alt="Logo" className="login-logo"/>
      <div className="login-btn-container">
        <a className="login-btn" href="http://localhost:8888/auth/google?usertype=customer">CUSTOMER</a>
        <a className="login-btn" href="http://localhost:8888/auth/google?usertype=restaurant">RESTAURANT</a>
      </div>
    </div>
  )
};
