import services from '../../services';

export const getRestos = () => dispatch => {
  services.db.getRestos()
    .then(restos => {
      dispatch({ type: 'GET_RESTOS', restos });
    })
}

export const getRestoData = () => dispatch => {
  services.db.getUserGoogleId()
    .then(res => services.db.getRestoData(res.googleId))
    // .then(res=> console.log(res))
    // .then(res => Promise.resolve({ firstName: res[0].firstName, lastName: res[0].lastName }))
    // .then(name => {
    //   dispatch({ type: 'SET_USER_NAME', name });
    // })
}
