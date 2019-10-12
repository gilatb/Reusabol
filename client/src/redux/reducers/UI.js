const INITIAL_STATE = {
  user: {
    userConfirmModal: false,
  },
  resto: {
    restoHistoryModal: false,
    restoConfirmModal: false,
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_OPEN_HISTORY':
    return {
      ...state,
      resto: {
        ...state.resto,
        restoHistoryModal: !state.resto.restoHistoryModal,
      }
    };
    case 'TOGGLE_RESTO_CONFIRM':
      return {
        ...state,
        resto: {
          ...state.resto,
          restoConfirmModal: !state.resto.restoConfirmModal,
        }
      };
      case 'TOGGLE_USER_CONFIRM':
          return {
            ...state,
            user: {
              ...state.user,
              userConfirmModal: !state.user.userConfirmModal,
            }
          };
    default:
      return state;
  }
}