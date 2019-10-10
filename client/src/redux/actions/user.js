import services from '../../services';

export const getUserName = () => dispatch => {
  services.db.getUserName()
    // .then(res => console.log('I am insidethe action: ', res))
    .then(name => {
      console.log(name);
      
      dispatch({ type: 'SET_USER_NAME', name });
      // dispatch({type: 'SET_NUMBOLS', listName: category, list: moviesList});
    })
}
