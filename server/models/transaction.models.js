const mongoose = require('../db');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  transId: String,
  userId: String,
  restoId: String,
  numBols: {type:Number, default:0},
  exchangeType: String,
  userFirstName: String,
  userLastName: String,
  restoName: String,
  image: String,
  orderTime: String
});

module.exports = TransactionSchema;