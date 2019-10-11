import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './UserHome.css';
import Header from '../Header/Header';
import Title from '../atomic-components/Title/Title';
import Map  from '../Map/Map';
import actions from '../../redux/actions';


export function UserHome ({ userData, getUserName, isLoggedIn }) {

  useEffect(() => {
    if (!isLoggedIn) {
      getUserName();
    }
  }, []);

  // should be in redux
  const [transaction, setTransaction] = useState({})

  if (isLoggedIn === null) return null
  if (!isLoggedIn) return "you are logged out!";
  if (isLoggedIn && userData.type !== 'customer') return "not allowed here";
  return (
    <div className="user-home">
      <Header />
      <Link to='/RestoHome'>Resto Home</Link>
      {userData && <Title text={`Hi ${userData.firstName}!`} />}
      <Map />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { userData: state.user.userData, isLoggedIn: state.user.isLoggedIn }
}

const mapDispatchToProps = (dispatch) => ({
  getUserName: () => dispatch(actions.user.getUserName()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
