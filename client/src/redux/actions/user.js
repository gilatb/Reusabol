import services from '../../services';

export const getUserName = () => dispatch => {
  services.db.getUserName()
    .then(name => {
      dispatch({ type: 'SET_USER_NAME', name });
      // dispatch({type: 'SET_NUMBOLS', listName: category, list: moviesList});
    })
}

export const getUserByEmail = (email) => dispatch => {
  services.db.getUserByEmail()
    .then(res => console.log(res));
    // .then(name => {
    //   dispatch({ type: 'SET_USER_NAME', name });
    //   // dispatch({type: 'SET_NUMBOLS', listName: category, list: moviesList});
    // })
}