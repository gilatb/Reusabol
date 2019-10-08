//URL of the server
const BASE_URL = 'http://localhost:4000';

export default {
  getUserData: (userId) => {
    return fetchRequest(`user/${userId}`);
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

