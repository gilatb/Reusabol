export function getUserData (userId, key) {
  return {
    type: 'GET_USER_DATA',
    userId,
  }
}

