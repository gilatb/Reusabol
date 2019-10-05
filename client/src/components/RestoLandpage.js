import React from 'react'

import Header from './Header';
import List from './List';
import Footer from './Footer';


export default function RestoLandpage () {

  //TODO: THIS ARRAY SHOULD BE THE ARRAY OF PREVIOUS RESTO TRANSACTIONS (FROM DB)
  const pendingTransactions = [1, 2, 3];

  return (
    <div>
      <Header />
      <List array={pendingTransactions} />
      <Footer />
    </div>
  )
}
