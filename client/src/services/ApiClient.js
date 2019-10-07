//FIXME: THIS SHOULD BE THE URL OF THE CLOUD DB
const BASE_URL = 'mongodb://localhost:27017/Reusabol';

export default {
  //TODO: CHECK THAT THIS IS ACCESSING THE ENDPOINT CORRECTLY USING BASE_URL AND :USERID
  getUserData: (userId) => {
    return fetchRequest(`users/:_${userId}`);
  }
}

//Generic fetch request for use with different endpoints
const fetchRequest = (url) => {
  fetch(`${BASE_URL}/${url}`)
    //TODO: WHAT IS HAPPENING HERE WITH PROMISE.REJECT? WHAT PROMISE?
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(result => result.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });
}