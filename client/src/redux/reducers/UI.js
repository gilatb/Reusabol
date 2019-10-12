const INITIAL_STATE = {
  user: {},
  resto: {
    restoHistory: false,
    restoConfirm: false,
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
    case 'TOGGLE_RESTO_CONFIRM':
      return {
        ...state,
        resto: {
          ...state.resto,
          restoConfirm: !state.resto.restoConfirm,
        }
      };
    default:
      return state;
  }
}