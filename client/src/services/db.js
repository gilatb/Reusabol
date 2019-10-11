import axios from 'axios';

//URL of the server
const BASE_URL = 'http://localhost:4000';

export default {
  getUserName: () => {
    return fetchRequestMe();
  },
  generateTransaction: (data) => {
    return fetchRequest('pendTrans', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  // createUser: () => {} // TODO: when the user just login
  getRestos: () => {
    return fetchRequest('admin/restos')
  } 
}

//Generic fetch request for use with different endpoints FIXME: gilat added data as second arg
const fetchRequest = (url, data) => {
  return fetch(`${BASE_URL}/${url}`)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(result => result.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });
}

//Fetch request to the /me endpoint
const fetchRequestMe = (url) => {
  return axios.get('http://localhost:8888/me', {withCredentials: true})
  // .then(res => console.log('I am inside the service', res))
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => Promise.resolve({firstName: res.data.user.name.givenName, lastName: res.data.user.name.familyName}))
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });

}

