import React from 'react';
import axios from 'axios'
export default function Login () {
  
  function callme() {
    axios.get('http://localhost:8888/me',{withCredentials: true}).then(res=>{
      console.log(res);
      
    })
  }
  return (

    <div>
      <button onClick={callme}>me</button>
      <h3>Login page</h3>
      
      <a href="http://localhost:8888/auth/google">User</a>
      <br />
      <span>Restaurant</span>
    </div>
  )
}
