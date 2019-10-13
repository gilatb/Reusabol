import services from '../../services';

export function setExchangeType (exchangeType) {
  return {
    type: 'SET_EXCHANGE_TYPE',
    setExchangeType,
  }
}

export function setCurrentTransaction (id) {
  return {
    type: 'SET_CURRENT_TRANSACTION',
    id,
  }
}

export function updateCounter (e, val) {
  return {
    type: 'UPDATE_COUNTER',
    val,
  }
}

export const saveNewTransaction = (reqBody) => dispatch => {
  services.db.generateTransaction(reqBody)
    // save transaction to redux: 👇🏻
    .then((transaction) => {Promise.resolve(
      dispatch({ type: 'SAVE_NEW_TRANSACTION', transaction }))
    })
    // TODO: move sendUserTransaction to cntrl (backend) (but works like this!!!)
    //FIXME: THE TRANSACTION HERE IS UNDEFINED....WHAT IS GOING ON?
    .then(transaction => services.sockets.sendUserTransaction(transaction))
}

