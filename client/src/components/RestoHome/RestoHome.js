import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import './RestoHome.css';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import socketIOClient from 'socket.io-client';
import { getRestoData } from '../../redux/actions/restos';
import { saveUpdatedTransaction } from '../../redux/actions/transaction';

//👇🏻this is how we listen to the emit on the other side of the socket
const socket = socketIOClient('localhost:4001');

function RestoHome ({ getRestoData, userData, restoData, transaction, saveUpdatedTransaction, pendingTransactions }) {

  useEffect(() => {
    getRestoData()
    socket.on('resto-receive-transaction', (res) => {
      saveUpdatedTransaction(res) // saves to redux
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="resto-home">
      <Header />
      <List array={pendingTransactions} />
      <Footer className="footer" />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    pendingTransactions: Object.values(state.transaction.pendingTransactions),
    restoData: state.restos.restoData
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRestoData: () => dispatch(getRestoData()),
  saveUpdatedTransaction: (transactions) => dispatch(saveUpdatedTransaction(transactions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestoHome);
