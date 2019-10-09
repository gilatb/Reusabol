const INITIAL_STATE = {
  user: {},
  resto: {
    openHistory: false,
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_OPEN':
    return {
      ...state,
      resto: {
        ...state.resto,
        openHistory: !state.resto.openHistory,
      }
    };
    default:
      return state;
  }
}