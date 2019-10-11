import services from '../../services';
// import Axios from 'axios';

export const getUser = cb => {
  services.db.getUserName()
    .then(name => {
      if (name &&name.firstName) {
        cb(name)
      }else {
        cb(null,'error')
      }
    })
}

export const getUserName = () => dispatch => {

  getUser((name) => {
    dispatch({ type: 'SET_USER_NAME', name })

  });
}

export const getRestaurantUser = () => dispatch => {
  getUser((name) => dispatch({ type: 'SET_RESTAURANT_USER', name }));
}

export const logout = () => dispatch => {
  document.cookie = ''
  fetch('http://localhost:8888/logout').then(()=>{
    dispatch({ type: 'LOGOUT' })

  })
}