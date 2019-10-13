const INITIAL_STATE = {
  userData: {
    firstName: '',
    lastName: '',
    googleImage: '',
    numBols: 0,
  },
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
          googleImage: action.name.googleImage,
        }
      };

    default:
      return state;
  }
}