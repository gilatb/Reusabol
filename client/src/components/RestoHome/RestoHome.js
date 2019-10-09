import React from 'react'
import socketIOClient from 'socket.io-client';

import './RestoHome.css';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';


export default function RestoHome () {

  //TODO: THIS ARRAY SHOULD BE THE ARRAY OF PREVIOUS RESTO TRANSACTIONS (FROM DB)
  const pendingTransactions = [1, 2, 3];

  // TODO: will be in state:
  const [transaction, settransaction] = useState({});

  // the socket should have its own connection 
  const socket = socketIOClient('localhost:4001'); // TODO: can be also: socket.connect('localhost:4001');

  // on comoponentDidMount we want to emit (send) the transactionObj through the socket
  useEffect(() => {
    socket.on('resto receive transaction', (data)=> {
      setTransaction(data)
      // and send to pending transaction and more... 
    });
  }, [])

  return (
    <div className="resto-home">
      <Header />
      <List array={pendingTransactions} />
      <Footer />
    </div>
  )
}
