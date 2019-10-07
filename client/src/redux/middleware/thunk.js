const thunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch);
  } else {
    next(action);
  }
}

export default thunk;