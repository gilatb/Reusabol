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

function RestoHome ({ getRestoData, userData, restoData, transaction, saveUpdatedTransaction, pendingTransactions, currentTransaction }) {

  // let currentTransDetails = currentTransaction && pendingTransactions.find(el => el.transId === currentTransaction);

  useEffect(() => {
    getRestoData()
    socket.on('resto-receive-transaction', (res) => {
      saveUpdatedTransaction(res) // saves to redux
    });
    // eslint-disable-next-line
  }, []);

  //TODO: UPDATE THIS TO GET THE PREV TRANSACTIONS FROM THE DB ONCE WE HAVE SOME
  const previousTransactions = [{id: 1, userId: 22, userFirstName: 'Eileen', userLastName: 'Juergens', restoName: 'Banana Palace', restoId: 34, numBols: 0, orderTime: '21:45'}, {id: 3, userId: 44, userFirstName: 'Andre', userLastName: 'DiFelice', restoName: 'LaBodegueta', restoId: 22, numBols: 0, orderTime: '23:15'}, {id: 45, userId: 55, userFirstName: 'Gilat', userLastName: 'Blumberger', restoName: 'Mensanna',restoId: 88, numBols: 0, orderTime: '18:53'}];

    // const restoId = restoData && restoData.restoId;

  return (
    <div className="resto-home">
      <Header />
      <List array={pendingTransactions} />
      <Footer className="footer" array={previousTransactions}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    pendingTransactions: Object.values(state.transaction.pendingTransactions),
    restoData: state.restos.restoData,
    // currentTransaction: state.transaction.currentTransaction,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getRestoData: () => dispatch(getRestoData()),
  saveUpdatedTransaction: (transactions) => dispatch(saveUpdatedTransaction(transactions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestoHome);
