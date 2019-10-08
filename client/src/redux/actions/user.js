import ApiClient from '../../services/ApiClient';

export const getUserData = userId => dispatch => {
  ApiClient.getUserData(userId)
    .then(user => {
      //TODO: WHY IS THE NUMBOLS NOT BEING RETURNED WITH THE USER INFO?
      dispatch({ type: 'SET_USER_NAME', user });
    // dispatch({type: 'SET_NUMBOLS', listName: category, list: moviesList});
  })
}


