const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Reusabol', {useNewUrlParser: true})
  .then (() => {
    console.log('Connected to db'); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.log('Mongo DB Error', err); // eslint-disable-line no-console
  });

module.exports = mongoose;