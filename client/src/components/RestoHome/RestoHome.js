import React from 'react'

import './RestoHome.css';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';


//TODO: DELETE SQUAREBTN ONCE THE MODAL WORKS AND YOU MOVE THIS FUNCTIONALITY TO THE BUTTON IN THE FOOTER
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import { lightBlue } from '@material-ui/core/colors';


export default function RestoHome () {

  //TODO: THIS ARRAY SHOULD BE THE ARRAY OF PREVIOUS RESTO TRANSACTIONS (FROM DB)
  const pendingTransactions = [{id: 1, userId: 22, userFirstName: 'Eileen', userLastName: 'Juergens', restoName: 'Banana Palace', restoId: 34, numBols: 0, orderTime: '21:45'}, {id: 2, userId: 44, userFirstName: 'Andre', userLastName: 'DiFelice', restoName: 'LaBodegueta', restoId: 22, numBols: 0, orderTime: '23:15'}, {id: 3, userId: 55, userFirstName: 'Gilat', userLastName: 'Blumberger', restoName: 'Mensanna',restoId: 88, numBols: 0, orderTime: '18:53'} ];

  return (
    <div className="resto-home">
      <Header />
      <List array={pendingTransactions} />
      <Footer />
    </div>
  )
}
