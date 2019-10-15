import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

import './UserHome.css';
import Header from '../Header/Header';
import Title from '../atomic-components/Title/Title';
import Map from '../Map/Map';
import { getUserData } from '../../redux/actions/user';
import { toggleUserConfirm } from '../../redux/actions/UI';
import UserConfirmModal from '../UserConfirmModal/UserConfirmModal';
import { saveConfirmedTransaction } from '../../redux/actions/transaction';

const socket = socketIOClient('localhost:4001');

export function UserHome ({ userData, getUserData, UIState, toggleUserConfirm, saveConfirmedTransaction, currentTransaction }) {

  const [pendTrans, setPendTrans] = useState([])

  useEffect(() => {
    getUserData();
    socket.on('user-receive-transaction', (transactions) => {
      setPendTrans(transactions);
      toggleUserConfirm();
    });
  }, [])

  useEffect(()=> {
    getCurrentTrans()
  }, [UIState.userConfirmModal])

  const getCurrentTrans = () => {
    const found = pendTrans.find(el => el.transId === currentTransaction);
    saveConfirmedTransaction(found)
  } 



  console.log('O', currentTransaction)
  return (
    <div className="user-home">
      <Header />
      {userData && <Title text={`Hi ${userData.firstName}!`} />}
      <Map />
      <UserConfirmModal />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    UIState: state.UI.user,
    currentTransaction: state.transaction.currentTransaction,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserData: () => dispatch(getUserData()),
  toggleUserConfirm: () => dispatch(toggleUserConfirm()),
  saveConfirmedTransaction: (transaction) => dispatch(saveConfirmedTransaction(transaction))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
