import services from '../../services';

export const getRestos = () => dispatch => {
  services.db.getRestos()
    .then(restos => {
      dispatch({ type: 'GET_RESTOS', restos });
    })
}
