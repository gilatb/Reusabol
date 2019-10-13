import services from '../../services';

export const getUserData = () => dispatch => {
  services.db.getUserGoogleId()
    .then(res => services.db.getUserData(res.googleId))
    .then(res => Promise.resolve({ firstName: res[0].firstName, lastName: res[0].lastName }))
    .then(name => {
      dispatch({ type: 'SET_USER_NAME', name });
    })
}




// export const getUserByEmail = (email) => dispatch => {
//   services.db.getUserByEmail()
//     .then(res => console.log('i am in the user action', res));
    // .then(name => {
    //   dispatch({ type: 'SET_USER_NAME', name });
    //   // dispatch({type: 'SET_NUMBOLS', listName: category, list: moviesList});
    // })
