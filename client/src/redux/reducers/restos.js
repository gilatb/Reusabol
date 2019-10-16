const INITIAL_STATE = {
  restos: [],
  restoData: {
    name: '',
    lastName: '',
    googleImage: '',
    restoId: '',
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
    case 'SET_SELECTED_RESTO':
      return {
        ...state,
        restoData: {
          ...state.restoDetails,
          name: action.resto.name,
          googleImage: action.resto.googleImage,
          restoId: action.resto._id,
          address: action.address,
        }
      };
    default:
      return state;
  }
}
