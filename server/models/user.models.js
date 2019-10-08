const mongoose = require('../db');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  coordinates: {
    lat: {type: String},
    long:{type: String},
  },
  phoneNumber: {type: String},
  email: {type: String},
  hashPassword: {type: String},
  google: {type: String},
  numBols: {type: Number},
  pendingTransactions: {type: Array},
  previousTransactions: {type: Array},
  notifications: {
    firstNoti: {type: Boolean},
    secondNoti: {type: Boolean},
    lastNoti: {type: Boolean},
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;