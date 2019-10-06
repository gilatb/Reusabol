import React from 'react';

import Header from '../Header/Header';
import Title from '../atomic-components/Title';
import List from '../List/List';


export default function UserHistory() {


  //TODO: THIS ARRAY SHOULD BE THE ARRAY OF PREVIOUS USER TRANSACTIONS (FROM DB)
  const userHistory = [1, 2, 3];

  return (
    <div>
      <Header />
      <Title text={'Completed transactions'} />
      <List array={userHistory} />
    </div>
  )
}


