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
    case 'NEW_TRANSACTION':
      return {
        ...state,
        transactions: {
          ...state.transactions,
          [action.transaction.transId]: {
            transId: action.transaction.transId,
            userId: action.transaction.userId,
            restoId: action.transaction.restoId,
            exchangeType: action.transaction.exchangeType,
            orderTime: action.transaction.orderTime,
          }
        }
      };
    case 'SET_EXCHANGE_TYPE':
      return {
        ...state,
        // transactions: { 
        // ...state.transactions,
        //  
        // } // TODO: find the right transaction and update the exchange type
      }
    default:
      return state;
  }
}