import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import './RestoHome.css';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import { getNewTransaction } from '../../redux/actions/transaction';
import socketIOClient from 'socket.io-client';
import ModalComp from '../atomic-components/Modal/ModalComp';
import RestoHistoryModal from '../RestoHistoryModal/RestoHistoryModal';

//TODO: DELETE SQUAREBTN ONCE THE MODAL WORKS AND YOU MOVE THIS FUNCTIONALITY TO THE BUTTON IN THE FOOTER
  import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
  import { lightBlue } from '@material-ui/core/colors';

// the socket should have its own connection
const socket = socketIOClient('localhost:4001'); // TODO: can be also: socket.connect('localhost:4001');

function RestoHome ({ getNewTransaction }) {
  console.log('getNewTransaction: ', getNewTransaction);

  //TODO: THIS ARRAY SHOULD BE THE ARRAY OF PREVIOUS RESTO TRANSACTIONS (FROM DB)
  const [pendingTransactions, setPendingTransactions] = useState([1, 2, 3])

  socket.on('resto-receive-transaction', (data) => {
    console.log('In restaurant data:', data);

    // setTransaction(data) // TODO: to state in redux
    // and send to pending transaction and more...
  });

  // when componentDodMount should:
  // useEffect(() => {
  //   getNewTransaction()
  // }, [])
  const pendingTransactions = [{id: 1, userId: 22, userFirstName: 'Eileen', userLastName: 'Juergens', restoName: 'Banana Palace', restoId: 34, numBols: 0, orderTime: '21:45'}, {id: 2, userId: 44, userFirstName: 'Andre', userLastName: 'DiFelice', restoName: 'LaBodegueta', restoId: 22, numBols: 0, orderTime: '23:15'}, {id: 3, userId: 55, userFirstName: 'Gilat', userLastName: 'Blumberger', restoName: 'Mensanna',restoId: 88, numBols: 0, orderTime: '18:53'} ];

  return (
    <div className="resto-home">
      <Header />
      <List array={pendingTransactions} />
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { userData: state.user.userData }
}

const mapDispatchToProps = (dispatch) => ({
  getNewTransaction: () => dispatch(getNewTransaction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestoHome);
