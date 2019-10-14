import services from '../../services';

export const getUserData = () => dispatch => {
  services.db.getUserGoogleId()
    .then(res => services.db.getUserData(res.googleId))
    .then(res => Promise.resolve({ firstName: res.firstName, lastName: res.lastName, googleImage: res.googleImage, userId: res._id }))
    .then(name => {
      dispatch({ type: 'SET_USER_NAME', name });
    })
}

