const INITIAL_STATE = {
  transactions: {
    id: {
      id: '',
      userId: '',
      restoId: '',
      numBols: 0,
      exchangeType: '',
    },
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_NEW_TRANSACTION':
    // console.log('action: ', action);
      return {
        ...state,
        transactions: {
          ...state.transaction,
          [action.transaction.transaction.transId]: {
            transId: action.transaction.transaction.transId,
            userId: action.transaction.transaction.userId,
            restoId: action.transaction.transaction.restoId,
            exchangeType: action.transaction.transaction.exchangeType,
            orderTime: action.transaction.transaction.orderTime,
          }
        }
      };
    case 'SET_EXCHANGE_TYPE':
      return {
        ...state,
        // transactions: { 
        // ...state.transactions,
        // [action.transaction.transaction.transId]: {
        // 
        // }
        // } // TODO: find the right transaction and update the exchange type
      }
    default:
      return state;
  }
}