const mongoose = require('../db');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  transId: {type: String, sparse: true},
  userId: String,
  restoId: String,
  numBols: {type: Number, default:0},
  exchangeType: String,
  userFirstName: String,
  userLastName: String,
  restoName: String,
  image: String,
  orderTime: String,
  name: String,
});

module.exports = TransactionSchema;