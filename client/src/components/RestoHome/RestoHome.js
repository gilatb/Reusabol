import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import './RestoHome.css';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import { getNewTransaction } from '../../redux/actions/transaction';

function RestoHome ({ getNewTransaction }) {
  console.log('getNewTransaction: ', getNewTransaction());

  //TODO: THIS ARRAY SHOULD BE THE ARRAY OF PREVIOUS RESTO TRANSACTIONS (FROM DB)
  const [pendingTransactions, setPendingTransactions] = useState([1, 2, 3])
  
  // when componentDodMount should:
  useEffect(() => {
    getNewTransaction()
  }, [])

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
