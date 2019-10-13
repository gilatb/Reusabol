const INITIAL_STATE = {
  pendingTransactions: {
    id: {
      transId: '',
      userId: '',
      restoId: '',
      numBols: 0,
      exchangeType: '',
      orderTime: 0,
      userFirstName: '',
      userLastName: '',
    },
  },
  currentTransaction: '',
  counter: 0,
  pendingTransactions: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_NEW_TRANSACTION':
      return {
        ...state,
        pendingTransactions: {
          ...state.pendingTransactions,
          [action.transaction.transaction.transId]: {
            transId: action.transaction.transaction.transId,
            userId: action.transaction.transaction.userId,
            restoId: action.transaction.transaction.restoId,
            exchangeType: action.transaction.transaction.exchangeType,
            orderTime: action.transaction.transaction.orderTime,
            userFirstName: action.transaction.transaction.userFirstName,
            userLastName: action.transaction.transaction.userLastName,
          }
        }
      };

    case 'SET_CURRENT_TRANSACTION':
      return {
        ...state,
        currentTransaction: action.id,
      };

    case 'UPDATE_COUNTER':
      const requestedValue = state.counter += action.val;
      const updatedValue = (requestedValue >= 0) ? requestedValue : 0;
      return {
        ...state,
        counter: updatedValue,
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
      };
    default:
      return state;
  }
}