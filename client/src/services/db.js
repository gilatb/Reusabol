import axios from 'axios';

//URL of the server
const BASE_URL = 'http://localhost:4000';

export default {
  getUserName: () => {
    return fetchRequestMe();
  },
  getRestos: () => {
    return fetchRequest('admin/restos')
  },
  getRestoData: (googleId) => {
    return fetchRequest(`admin/restos/${googleId}`)
  },
  generateTransaction: (reqBody) => {
    console.log(reqBody);
    
    return fetchRequest('pendTrans', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(reqBody)
    });
  },
  getTransactions: (restoId) => {
    return fetchRequest(`resto/${restoId}/pendTrans`);
  },
  getRestos: () => {
    return fetchRequest('admin/restos');
  },
  getUserData: (googleId) => {
    return fetchRequest(`admin/users/${googleId}`);
  },
  getUserGoogleId: () => {
    return fetchRequestMe();
  },
  updateTransaction: (reqBody) => {
    return fetchRequest('pendTrans/updateNumBols',{
      method: 'PUT',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      },
    })
  },
  getConfirmation: (userId) => {
    return fetchRequest(`user/${userId}/pendTrans`)
  },
}

//Generic fetch request for use with different endpoints
const fetchRequest = (url, optionsObj) => {
  return fetch(`${BASE_URL}/${url}`, optionsObj)
  .then(res => res.status <= 400 ? res : Promise.reject(res))
  .then(result => result.json())
  .catch((err) => {
    console.log(`${err.message} while fetching /${url}`)
  });
}

//Fetch request to the /me endpoint
const fetchRequestMe = (url) => {
  return axios.get('http://localhost:8888/me', {withCredentials: true})
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    // .then(res=>console.log(res))
    .then(res => Promise.resolve({googleId: res.data.user.id}))
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });

}

