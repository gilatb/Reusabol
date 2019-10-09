import axios from 'axios';

//URL of the server
const BASE_URL = 'http://localhost:4000';

//TODO: ONCE /ME ENDPOINT HAS BEEN MOVED TO 4000, DELETE MEFETCHREQUEST
export default {
  getUserName: () => {
    return MEfetchRequest(`me`);
  }
}

//Generic fetch request for use with different endpoints
const fetchRequest = (url) => {
  return fetch(`${BASE_URL}/${url}`)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(result => result.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });
}

//TODO: ONCE /ME ENDPOINT HAS BEEN MOVED TO 4000, DELETE MEFETCHREQUEST
const MEfetchRequest = (url) => {
  return axios.get('http://localhost:8888/me', {withCredentials: true})
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => Promise.resolve({firstName: res.data.user.name.givenName, lastName: res.data.user.name.familyName}))
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });
}
