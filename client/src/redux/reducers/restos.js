const INITIAL_STATE = {
  restos: [],
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
      }
    default:
      return state;
  }
}