import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Login () {
  return (
    <div>
      <h3>Login page</h3>
      <NavLink to="/UserLandPage"><span>User</span></NavLink>
      <br />
      <NavLink to="/RestoLandPage"><span>Restaurant</span></NavLink>
    </div>
  )
}
