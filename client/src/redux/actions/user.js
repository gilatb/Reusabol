import services from '../../services';

export const getUserData = () => dispatch => {
  services.db.getUserGoogleId()
    .then(res => services.db.getUserData(res.googleId))
    .then(res => Promise.resolve({ firstName: res[0].firstName, lastName: res[0].lastName, googleImage: res[0].googleImage, userId: res[0]._id }))
    .then(name => {
      dispatch({ type: 'SET_USER_NAME', name });
    })
}

