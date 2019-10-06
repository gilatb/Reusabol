import React from 'react';

import './RestoHistory.css';
import Header from '../Header/Header';
import Title from '../atomic-components/Title/Title';
import List from '../List/List';

export default function RestoHistory() {


  //TODO: THIS ARRAY SHOULD BE THE ARRAY OF PREVIOUS RESTO TRANSACTIONS (FROM DB)
  const restoHistory = [1, 2, 3];

  return (
    <div className="resto-history">
      <Header />
      <Title text={'Completed transactions'} />
      <List array={restoHistory} />
    </div>
  )
}