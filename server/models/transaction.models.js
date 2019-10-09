const mongoose = require('../db');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  transId: String,
  userId: String,
  restoId: String,
  numBols: {type:Number, default:0}
});

module.exports = TransactionSchema;