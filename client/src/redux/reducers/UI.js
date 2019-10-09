const INITIAL_STATE = {
  user: {},
  resto: {
    openHistory: false,
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_OPEN':
    return {
      ...state,
      resto: {
        ...state.resto,
        openHistory: true,
      }
    };
    default:
      return state;
  }
}