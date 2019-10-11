const INITIAL_STATE = {
  user: {},
  resto: {
    restoHistory: false,
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_OPEN_HISTORY':
    return {
      ...state,
      resto: {
        ...state.resto,
        restoHistory: !state.resto.restoHistory,
      }
    };
    default:
      return state;
  }
}