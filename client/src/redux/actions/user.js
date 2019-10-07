import ApiClient from '../../services/ApiClient';

export const getUserData = userId => dispatch => {
  ApiClient.getUserData(userId)
  .then(userData => {
    //TODO: CHANGE THE DISPATCH TO JUST SET THE USER FIRSTNAME AND SET USER NUMBOLS IN REDUX
    // dispatch({type: 'SET_MOVIES', moviesList });
    // dispatch({type: 'SET_LISTS', listName: category, list: moviesList});
  })
}