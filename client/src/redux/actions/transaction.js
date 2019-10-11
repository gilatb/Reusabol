import services from '../../services';

export function setExchangeType (exchangeType) {
  return {
    type: 'SET_EXCHANGE_TYPE',
    setExchangeType,
  }
}

export const userTransaction = (reqBody) => dispatch => {
  services.db.generateTransaction(reqBody)
  // services.sockets.sendUserTransaction() //TODO: now should invoke a console.log
  .then(res => console.log('In userTransaction action, res: ',res))
  // .then((transaction) => {
  //   dispatch({ type: 'NEW_TRANSACTION', transaction })
  // })
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

