import ApiClient from '../../services/ApiClient';

export const getUserData = userId => dispatch => {
  ApiClient.getUserData(userId)
  .then(user => {
    console.log('user: ', user);
    //TODO: CHANGE THE DISPATCH TO JUST SET THE USER FIRSTNAME AND SET USER NUMBOLS IN REDUX
    // dispatch({type: 'SET_USER_NAME', user }),  //SETS USER FIRST AND LAST NAME
    // dispatch({type: 'SET_NUMBOLS', listName: category, list: moviesList});
  })
}


//TODO: MAKE GETALL FOR RESTOS THAT CAN BE CALLED IN MAP.JS