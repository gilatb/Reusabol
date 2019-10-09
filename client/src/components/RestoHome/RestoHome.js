import React from 'react'

import './RestoHome.css';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import ModalComp from '../atomic-components/Modal/ModalComp';
import RestoHistoryModal from '../RestoHistoryModal/RestoHistoryModal';

//TODO: DELETE SQUAREBTN ONCE THE MODAL WORKS AND YOU MOVE THIS FUNCTIONALITY TO THE BUTTON IN THE FOOTER
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import { lightBlue } from '@material-ui/core/colors';


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
