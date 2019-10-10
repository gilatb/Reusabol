import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';

export default function Login () {

  function callMe () {
    axios.get('http://localhost:8888/me', { withCredentials: true }).then(res => {
      // delete this once we know we have access to the requestAnimationFrame.user object
      console.log(res);
    })
  }

  //Get rid of the onCLick 'me' button once done testing
  return (
    <div>
      <SquareBtn onClick={callMe} text={"me"} />
      <h3>Login page</h3>
      <a href="http://localhost:8888/auth/google">User</a>
      <br />
      <span>Restaurant</span>
    </div>
  )
};
