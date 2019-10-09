const mongoose = require('../db');
const Schema = mongoose.Schema;


const TransactionSchema = new Schema({
  userId: String,
  restoId: String,
  numBols: {type:Number, default:0}
});

module.exports = TransactionSchema;