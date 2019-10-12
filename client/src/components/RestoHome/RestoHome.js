import React from 'react'
import { connect } from 'react-redux';


import './RestoHome.css';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import socketIOClient from 'socket.io-client';
import db from '../../services/db';

//👇🏻this is how we listen to the emit on the other side of the socket
const socket = socketIOClient('localhost:4001'); 

function RestoHome ({ userData, transaction }) {

  socket.on('resto-receive-transaction', () => {
    const restoId = '5da196445a02edd9147d4d11' // FIXME: make it dynamic
    db.getTransactions(restoId)
    .then(res => console.log('res in RestoHome when GET the pendTrans: ', res))
    // .then(res => ) TODO: put it into redux, transaction or new-> pending transacions 
    // console.log('In restoHome, transaction from redux should be empty:', transaction);
  });

  const pendingTransactions = [{id: 1, userId: 22, userFirstName: 'Eileen', userLastName: 'Juergens', restoName: 'Banana Palace', restoId: 34, numBols: 0, orderTime: '21:45'}, {id: 3, userId: 44, userFirstName: 'Andre', userLastName: 'DiFelice', restoName: 'LaBodegueta', restoId: 22, numBols: 0, orderTime: '23:15'}, {id: 45, userId: 55, userFirstName: 'Gilat', userLastName: 'Blumberger', restoName: 'Mensanna',restoId: 88, numBols: 0, orderTime: '18:53'}];

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
    userData: state.user.userData, //TODO: this should be restoId source?
    transaction: state.transaction.pendingTransactions.id
  }
}

const mapDispatchToProps = (dispatch) => ({
    // saveNewTransaction: (reqBody) => dispatch(saveNewTransaction(reqBody)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestoHome);
