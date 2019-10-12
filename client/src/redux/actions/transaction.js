import services from '../../services';

export const userTransaction = (reqBody) => dispatch => {
  services.db.generateTransaction(reqBody)
  // TODO: move sendUserTransaction to cntrl (backend)
  .then(transaction => services.sockets.sendUserTransaction(transaction))
    // save transaction to redux: 👇🏻
    // .then((transaction) => {
    //   dispatch({ type: 'SAVE_NEW_TRANSACTION', transaction })
    // })
  // services.sockets.sendUserTransaction(reqBody);
}

