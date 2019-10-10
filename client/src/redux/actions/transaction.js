import services from '../../services';


export const userTransaction = () => dispatch => {
  // console.log('hi from action: ', );
  services.sockets.sendUserTransaction() //TODO: now should invoke a console.log
  // .then(res => console.log(res))
  .then((transaction) => {
    dispatch({ type: 'NEW_TRANSACTION', transaction })
  });
    // .then(res => console.log('I am insidethe action: ', res))
    // .then(name => {
      // dispatch({ type: 'SET_USER_NAME', name });
    //   // dispatch({type: 'SET_NUMBOLS', listName: category, list: moviesList});
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

