import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

import './UserHome.css';
import Header from '../Header/Header';
import Title from '../atomic-components/Title/Title';
import Map from '../Map/Map';
import actions from '../../redux/actions';

export function UserHome ({ userData, getUserName }) {

  useEffect(() => {
    getUserName();
  }, []);

import Map from '../Map/Map'
export default function UserHome () {
  // TODO: will be in state:
  const transactionObj = {};

  // the socket should have its own connection 
  const socket = socketIOClient('localhost:4001'); // TODO: can be also: socket.connect('localhost:4001');

  // should be in the click handler => onclick we want to emit (send) the transactionObj through the socket
  useEffect(() => {
    socket.emit('user ask transaction', transactionObj);
  }, [])


  return (
    <div className="user-home">
      <Header />
      {userData && <Title text={`Hi ${userData.firstName}!`} />}
      <Map />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { userData: state.user.userData, }
}

const mapDispatchToProps = (dispatch) => ({
  getUserName: () => dispatch(actions.user.getUserName()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
