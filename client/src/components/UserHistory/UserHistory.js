import React from 'react';

import './UserHistory.css';
import Header from '../Header/Header';
import Title from '../atomic-components/Title/Title';
import List from '../List/List';

export default function UserHistory() {


  //TODO: THIS ARRAY SHOULD BE THE ARRAY OF PREVIOUS USER TRANSACTIONS (FROM DB)
  const userHistory = [1, 2, 3];

  return (
    <div className="user-history">
      <Header />
      <Title text={'Completed transactions'} />
      <List array={userHistory} />
    </div>
  )
}


