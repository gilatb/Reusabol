const INITIAL_STATE = {
  user: {},
  resto: {
    restoHistory: false,
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_OPEN':
      //TODO: YOU ARE HERE, YOU ARE TRYING TO MAKE THE MODAL WORK AGAIN
    let toggleVar = `state.resto.action.${action.modalName}`
    return {
      ...state,
      resto: {
        ...state.resto,
        [action.modalName]: !toggleVar,
      }
    };
    default:
      return state;
  }
}