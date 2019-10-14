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
    .then(res => Promise.resolve({ name: res[0].name, restoId: res[0]._id, googleImage: res[0].googleImage }))
    .then(restoDetails => {
      dispatch({ type: 'SET_RESTO_DETAILS', restoDetails });
    })
}
