import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './UserHome.css';
import Header from '../Header/Header';
import Title from '../atomic-components/Title/Title';
import Map from '../Map/Map';
import { getUserData } from '../../redux/actions/user';
import { toggleUserConfirm } from '../../redux/actions/UI';
import db from '../../services/db';

// const socket = socketIOClient('localhost:4001');

export function UserHome ({ userData, getUserData, UIState, toggleUserConfirm }) {

  //TODO: FOR GILAT: TOGGLEUSERCONFIRM WILL CHANGE UI STATE AND OPEN THE MODAL
  // You ROCK Linnea! 😎

  useEffect(() => {
    getUserData();
  }, []);

  // socket.on('resto-receive-transaction', () => {
    setInterval(() => {
      const userId = '5d9dda94f1db50ee60fef118' // "5da02d3e25565abaa38f9914" //'5d9dda94f1db50ee60fef118' // FIXME: make dynamic!!
      db.getConfirmation(userId)
      .then(res => console.log('res in UserHome when GET the pendTrans: ', res))
      .then(toggleUserConfirm())
    }, 60000)
  // });

  return (
    <div className="user-home">
      <Header />
      {userData && <Title text={`Hi ${userData.firstName}!`} />}
      <Map />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    UIState: state.UI.user,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserData: () => dispatch(getUserData()),
  toggleUserConfirm: () => dispatch(toggleUserConfirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
