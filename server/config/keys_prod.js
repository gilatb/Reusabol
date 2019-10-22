
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

module.exports = {
  mongoURI:`mongodb+srv://${username}:${password}@dbreusabol-o0isk.mongodb.net/test?retryWrites=true&w=majority`
};


