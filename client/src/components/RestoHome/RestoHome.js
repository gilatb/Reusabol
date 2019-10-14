import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';


import './RestoHome.css';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import socketIOClient from 'socket.io-client';
import db from '../../services/db';
import { getRestoData } from '../../redux/actions/restos';
import { saveUpdatedTransaction } from '../../redux/actions/transaction';

//👇🏻this is how we listen to the emit on the other side of the socket
const socket = socketIOClient('localhost:4001');


function RestoHome ({ userData, transaction, saveUpdatedTransaction, pendingTransactions }) {

  useEffect(() => {
    getRestoData();
  }, []);

    // const example = [{id: 1, userId: 22, userFirstName: 'Eileen', userLastName: 'Juergens', restoName: 'Banana Palace', restoId: 34, numBols: 0, orderTime: '21:45'}, {id: 3, userId: 44, userFirstName: 'Andre', userLastName: 'DiFelice', restoName: 'LaBodegueta', restoId: 22, numBols: 0, orderTime: '23:15'}, {id: 45, userId: 55, userFirstName: 'Gilat', userLastName: 'Blumberger', restoName: 'Mensanna',restoId: 88, numBols: 0, orderTime: '18:53'}];

  socket.on('resto-receive-transaction', () => {
    const restoId = "5da4496cb7c099f6d8125054";//'5da196445a02edd9147d4d11' // FIXME: make it dynamic
    db.getTransactions(restoId)
    .then(res => saveUpdatedTransaction(res)) 
      // .then(res => console.log('res in RestoHome: ', res)) // 👈 returns only the pending transation from resto/user from the res 
  });

  // setTimeout(() => console.log('res in RestoHome when GET the pendTrans: ', pendingTransactions), 10000)

  return (
    <div className="resto-home">
      <Header />
      <List array={pendingTransactions} />
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    // transaction: state.transaction.pendingTransactions.id,
    pendingTransactions: Object.values(state.transaction.pendingTransactions)
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRestoData: () => dispatch(getRestoData()),
  saveUpdatedTransaction: (transactions) => dispatch(saveUpdatedTransaction(transactions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestoHome);
