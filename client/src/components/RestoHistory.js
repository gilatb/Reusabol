import React from 'react';

import Header from './Header';
import Title from './atomic-components/Title';
import List from './List';

export default function RestoHistory() {


  //TODO: THIS ARRAY SHOULD BE THE ARRAY OF PREVIOUS RESTO TRANSACTIONS (FROM DB)
  const restoHistory = [1, 2, 3];

  return (
    <div>
      <Header />
      <Title text={'Completed transactions'} />
      <List array={restoHistory} />
    </div>
  )
}