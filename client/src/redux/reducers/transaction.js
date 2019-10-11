const INITIAL_STATE = {
  transactionData: {
    transactionId: '',
    userId: '',
    restoId: '',
    numBols: 0,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEW_TRANSACTION':
      return {
        ...state,
        transactionData: {
          ...state.transactionData,
          transactionId: action.transaction.transactionId,
          userId: action.transaction.userId,
          restoId: action.transaction.restoId,
          numBols: action.transaction.numBols
        }
      };
    default:
      return state;
  }
}