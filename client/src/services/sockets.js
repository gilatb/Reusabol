import socketIOClient from 'socket.io-client';

// the socket should have its own connection 
const socket = socketIOClient('localhost:4001'); // TODO: make it '/transaction' or '/take'


export default {
  sendUserTransaction,
}

// TODO: called in Map, onclick of the Buttons in the popup:
function sendUserTransaction (transaction) {
  socket.emit('user-ask-transaction', `here is the transaction: ${transaction}`);
}
