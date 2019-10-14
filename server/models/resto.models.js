const mongoose = require('../db');
const Schema = mongoose.Schema;
const TransactionSchema = require('./transaction.models');
// const CoordinatesSchema = require('./coordinates.models');

const RestoSchema = new Schema({
  name: String,
  address: String,
  lat: Number,
  lng: Number,
  // coordinates: CoordinatesSchema,
  phoneNumber: String,
  contactPerson: String,
  email: String,
  hashPassword: String,
  inventory: {type: Number, default: 0},
  pendingTrans: [TransactionSchema],
  previousTrans: [TransactionSchema],
  googleId: String,
  firstName: String,
  lastName: String,
  googleImage: String,
});

const Resto = mongoose.model('Restaurant', RestoSchema);

module.exports = Resto;
