const INITIAL_STATE = {
  pendingTransactions: [],
  updatedCurrentTransaction: {},
  currentTransaction: '',
  counter: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_NEW_TRANSACTION':
      return {
        ...state,
        pendingTransactions: {
          ...state.pendingTransactions,
          [action.transactions.transaction.transId]: {
            transId: action.transactions.transaction.transId,
            userId: action.transactions.transaction.userId,
            restoId: action.transactions.transaction.restoId,
            exchangeType: action.transactions.transaction.exchangeType,
            orderTime: action.transactions.transaction.orderTime,
            userFirstName: action.transactions.transaction.userFirstName,
            userLastName: action.transactions.transaction.userLastName,
            googleImage: action.transactions.transaction.googleImage,
            name: action.transactions.transaction.name,
          }
        }
      };

    case 'SET_CURRENT_TRANSACTION':
      return {
        ...state,
        currentTransaction: action.transaction.transId, // TODO: shouldn't be action.transId?
      };

    case 'UPDATE_CURRENT_TRANSACTION':
      return {
        ...state,
        currentTransaction: action.transactions.transaction.transId,
      };

    case 'UPDATE_COUNTER':
      const requestedValue = state.counter += action.val;
      const updatedValue = (requestedValue >= 0) ? requestedValue : 0;
      return {
        ...state,
        counter: updatedValue,
      };
    case 'CLEAR_COUNTER':
      return {
        ...state,
        counter: 0,
      };
    case 'SET_EXCHANGE_TYPE':
      return {
        ...state,
        currentTransaction: {
          ...state.currentTransaction,
          exchangeType: action.exchangeType,
        }
      };
    case 'SET_PENDING_TRANS':
      return {
        ...state,
        pendingTransactions: action.restoDetails.pendingTrans,
      };
    case 'SAVE_UPDATED_TRANSACTION':
      return {
        ...state,
        pendingTransactions: [...action.transaction]
      };
    case 'SAVE_CONFIRMED_TRANSACTION':
      return {
        ...state,
        updatedCurrentTransaction: action.transaction
      };


    default:
      return state;
  }
}