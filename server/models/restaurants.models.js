const mongoose = require('../db');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {type: String, required: true},
  address: {type: String},
  coordinates: {
    lat: {type: String},
    long:{type: String},
  },
  phoneNumber: {type: String},
  contactPerson: {type: String},
  email: {type: String},
  hashPassword: {type: String},
  google: {type: String},
  inventory: {type: Number},
  pendingTransactions: {type: Array},
  previousTransactions: {type: Array},
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
