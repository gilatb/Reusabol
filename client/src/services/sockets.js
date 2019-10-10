import socketIOClient from 'socket.io-client';

// the socket should have its own connection 
const socket = socketIOClient('localhost:4001'); // TODO: can be also: socket.connect('localhost:4001');


export default {
  // to map (user)👇🏻
  sendUserTransaction, 
  // to resto 👇🏻
  getNewTransaction
}

// TODO: should be in RestoHome
// on comoponentDidMount we want to emit (send) the transactionObj through the socket
function getNewTransaction () {
  console.log('before resto-receive-transaction');
  
  socket.on('resto-receive-transaction', (data) => {
    console.log('In restaurant data:', data);
    
  // setTransaction(data) // TODO: to state in redux
  // and send to pending transaction and more... 
  });
}


// TODO: should be in Map, onclick of the Buttons in the popup:
function sendUserTransaction (data) {
  socket.emit('user-ask-transaction', "data");
  const str = 'Saying hi from getNewTransaction -> actions.transaction -> transactionClickHandler onClick -> sendUserTransaction'
  return Promise.resolve(str);
}
