import services from '../../services';

export function setExchangeType (exchangeType) {
  return {
    type: 'SET_EXCHANGE_TYPE',
    setExchangeType,
  }
}

export const userTransaction = (reqBody) => dispatch => {
  services.db.generateTransaction(reqBody)
  // save transaction to redux: 👇🏻
  .then((transaction) => {
    dispatch({ type: 'SAVE_NEW_TRANSACTION', transaction })
  })
  // services.sockets.sendUserTransaction() //TODO: 
  .then(res => console.log('In userTransaction action, res: ',res))
}


export const getNewTransaction = () => dispatch => {
  // console.log('hi from action: ', );
  services.sockets.getNewTransaction() //TODO: now should invoke a console.log
  // .then(res => console.log(res))
  // .then((data) => dispatch({ type: 'RECEIVE_TRANSACTION', data }))
    // .then(res => console.log('I am insidethe action: ', res))
    // .then(name => {
      // dispatch({ type: 'SET_USER_NAME', name });
    //   // dispatch({type: 'SET_NUMBOLS', listName: category, list: moviesList});
    // })
}

