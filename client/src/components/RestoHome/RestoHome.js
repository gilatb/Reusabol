import React from 'react'

import './RestoHome.css';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';


export default function RestoHome () {

  //TODO: THIS ARRAY SHOULD BE THE ARRAY OF PREVIOUS RESTO TRANSACTIONS (FROM DB)
  const pendingTransactions = [1, 2, 3];

  return (
    <div className="resto-home">
      <Header />
      <List array={pendingTransactions} />
      <Footer />
    </div>
  )
}
