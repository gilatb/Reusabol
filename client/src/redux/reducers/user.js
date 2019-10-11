const INITIAL_STATE = {
  userData: {
    firstName: '',
    lastName: '',
    numBols: 0,
  },
  restos: [] //TODO: should start from an ampty array
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        userData: {
          ...state.userData,
          firstName: action.name.firstName,
          lastName: action.name.lastName,
        }
      };
      // TODO:??? 
    case 'GET_RESTOS':
      console.log('here should be GET_RESTOS array, action:', action);
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