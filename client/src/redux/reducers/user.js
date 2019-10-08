const INITIAL_STATE = {
  userData: {
    firstName: '',
    lastName: '',
    numBols: 0,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_USER_DATA':
      console.log('I am in the GET_USER_DATA reducer')
      return state;
    case 'SET_USER_NAME':
      return {
        ...state,
        userData: {
          ...state.userData,
          firstName: action.user.firstName,
          lastName: action.user.lastName,
        }
      };
    default:
      return state;
  }
}