const mongoose = require('../db');
const Schema = mongoose.Schema;
const TransactionSchema = require('./transaction.models');
const CoordinatesSchema = require('./coordinates.models');
const GoogleSchema = require('./google.models');

const RestoSchema = new Schema({
  name: String,
  address: String,
  coordinates: CoordinatesSchema,
  phoneNumber: String,
  contactPerson: String,
  email: String,
  hashPassword: String,
  google: GoogleSchema,
  inventory: {type: Number, default: 0},
  pendingTrans: [TransactionSchema],
  previousTrans: [TransactionSchema]
});

const Resto = mongoose.model('Restaurant', RestoSchema);

module.exports = Resto;
