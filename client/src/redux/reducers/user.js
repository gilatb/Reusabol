const INITIAL_STATE = {
  userData: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_USER_DATA':
    // console.log(action)
      return state;
    default:
      return state;
  }
}