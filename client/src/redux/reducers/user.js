const INITIAL_STATE = {
  requested: false,
  userData: {
    firstName: '',
    lastName: '',
    numBols: 0,
  },
  //logged in flag to use for whitelisting paths for authorized users
  isLoggedIn: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER_REQUESTED':
      return { ...state, requested: action.requested }
    case 'SET_USER_NAME':
      return {
        ...state,
        userData: {
          ...state.userData,
          firstName: action.name.firstName,
          lastName: action.name.lastName,
          type: 'customer',
        },
        isLoggedIn: true
      };
    //created types for both customer and restaurant
    case 'SET_RESTAURANT_USER':
      return {
        ...state,
        userData: {
          ...state.userData,
          firstName: action.name.firstName,
          lastName: action.name.lastName,
          type: 'restaurant'
        },
        isLoggedIn: true
      }
    case 'LOGOUT':
      
      return {
        ...INITIAL_STATE,
        isLoggedIn: false
      }
    default:
      return state;
  }
}