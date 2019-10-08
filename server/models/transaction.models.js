const mongoose = require('../db');
const Schema = mongoose.Schema;

const TransSchema = new Schema({
  userId: {type: String},
  restoId: {type: String},
  numBols: {type: Number}
});

const Trans = mongoose.model('Transaction', TransSchema);

module.exports = Trans;