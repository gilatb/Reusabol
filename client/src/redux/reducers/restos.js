const INITIAL_STATE = {
  restos: [],
  restoData: {
    name: '',
    lastName: '',
    googleImage: '',
    userId: null,
    pendingTrans: [],
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_RESTOS':
      return {
        ...state,
        restos: [
          ...state.restos,
          ...action.restos
        ]
      };
      case 'SET_RESTO_DETAILS':
        return {
          ...state,
          restoData: {
            ...state.restoDetails,
            name: action.restoDetails.name,
            googleImage: action.restoDetails.googleImage,
            restoId: action.restoDetails.restoId,
          }
        };
    default:
      return state;
  }
}
