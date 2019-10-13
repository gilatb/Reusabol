import services from '../../services';

export const getUserData = () => dispatch => {
  services.db.getUserGoogleId()
  // .then(res=>console.log(res.googleId));
  .then(res => services.db.getUserData(res.googleId))
  // .then(res => console.log('how am i here, dont get it', res))
    //TODO: once you have the googleId from /me, get the other user data from the db
    // .then(name => {
    //   dispatch({ type: 'SET_USER_NAME', name });
    // })
}

// export const getUserByEmail = (email) => dispatch => {
//   services.db.getUserByEmail()
//     .then(res => console.log('i am in the user action', res));
    // .then(name => {
    //   dispatch({ type: 'SET_USER_NAME', name });
    //   // dispatch({type: 'SET_NUMBOLS', listName: category, list: moviesList});
    // })
