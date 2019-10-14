const INITIAL_STATE = {
  // pendingTransactions: {},
  pendingTransactions: [],
  currentTransaction: '',
  counter: 0,
  // pendingTransactions: { 1: { id: 1, userId: 22, userFirstName: 'Eileen', userLastName: 'Juergens', restoName: 'Banana Palace', restoId: 34, numBols: 0, orderTime: '21:45' }, 2: { id: 2, userId: 44, userFirstName: 'Andre', userLastName: 'DiFelice', restoName: 'LaBodegueta', restoId: 22, numBols: 0, orderTime: '23:15' }, 3: { id: 3, userId: 55, userFirstName: 'Gilat', userLastName: 'Blumberger', restoName: 'Mensanna', restoId: 88, numBols: 0, orderTime: '18:53' } }
  // pendingTransactions: [],
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
            googleImage: action.transaction.transaction.googleImage,
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

    case 'SAVE_UPDATED_TRANSACTION':
    console.log('action in transaction reducer: ', action);
      // return state;
      return {
        ...state,
        pendingTransactions : [...action.transaction] // FIXME: doesn't update the numBols, only in the next call
        // pendingTransactions : [...action.transaction.map(el => el.numBols = state.counter)]
        // pendingTransactions: {
        //   [action.transaction.transId]: {
        //   // numBols: state.transaction.counter, //FIXME: says it's undefined
        //   numBols: state.counter,
        //   exchangeType: action.transaction.exchangeType,
        //   orderTime: action.transaction.orderTime,
        //   restoId: action.transaction.restoId,
        //   transId: action.transaction.transId,
        //   userId: action.transaction.userId,
        //   userFirstName: action.transaction.userFirstName,
        //   userLastName: action.transaction.userLastName,
        // }}
      };
    default:
      return state;
  }
}