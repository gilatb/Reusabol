import React, { useState } from 'react'
import { connect } from 'react-redux';


import './RestoHome.css';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import socketIOClient from 'socket.io-client';
import db from '../../services/db';
import { saveNewTransaction } from '../../redux/actions/transaction';

//👇🏻this is how we listen to the emit on the other side of the socket
const socket = socketIOClient('localhost:4001');

function RestoHome ({ userData, transaction, saveNewTransaction }) {

  const [pendingTransactions, setPendingTransactions] = useState(null);

  socket.on('resto-receive-transaction', () => {
    const restoId = '5da1908bc0f9ae0ff23f83e5' // FIXME: make it dynamic
    db.getTransactions(restoId)
    // .then(res => console.log('res in RestoHome when GET the pendTrans: ', res))
    .then(res => setPendingTransactions(res))
    // .then(transactions => saveNewTransaction(transactions)) // 👈redux version
  });

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
  saveNewTransaction: (transactions) => dispatch(saveNewTransaction(transactions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestoHome);
