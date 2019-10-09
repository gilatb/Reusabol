import React from 'react';

export default function Login () {
  return (
    <div>
      <h3>Login page</h3>
      <a href="http://localhost:8888/auth/google?usertype=customer">User</a>
      <br />
      <a href="http://localhost:8888/auth/google?usertype=restaurant">Restaurant</a>
    </div>
  )
};
