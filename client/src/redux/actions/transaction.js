import services from '../../services';

export const saveNewTransaction = (reqBody) => dispatch => {
  services.db.generateTransaction(reqBody)
  // save transaction to redux: 👇🏻
  .then((transaction) => {
    dispatch({ type: 'SAVE_NEW_TRANSACTION', transaction })
  })
  // TODO: move sendUserTransaction to cntrl (backend) (but works like this!!!)
  .then(transaction => services.sockets.sendUserTransaction(transaction))
}

