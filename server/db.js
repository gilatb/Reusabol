const mongoose = require('mongoose');

const config = require('./config/keys');

mongoose.connect(config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then (() => {
    console.log('Connected to db');
  })
  .catch((err) => {
    console.log('Mongo DB Error', err);
  });

module.exports = mongoose;
