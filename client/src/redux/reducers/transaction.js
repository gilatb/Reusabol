const INITIAL_STATE = {
  pendingTransactions: {
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
        pendingTransactions: {
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
    default:
      return state;
  }
}