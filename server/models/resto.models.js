const mongoose = require('../db');
const Schema = mongoose.Schema;

const RestoSchema = new Schema({
  name: {type: String, required: true},
  address: {type: String},
  coordinates: {type: String},
  // lat: {type: String},
  // long:{type: String},
  phoneNumber: {type: String},
  contactPerson: {type: String},
  email: {type: String},
  hashPassword: {type: String},
  google: {type: String},
  numBols: {type: Number, default: 0},
  pendingTransactions: {type: Array},
  previousTransactions: {type: Array},
});

const Resto = mongoose.model('Restaurant', RestoSchema);

module.exports = Resto;
