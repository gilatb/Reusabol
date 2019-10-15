const mongoose = require('../db');
const Schema = mongoose.Schema;
const TransactionSchema = require('./transaction.models');
// const CoordinatesSchema = require('./coordinates.models');
const NotificationSchema = require('./notification.models');

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  lat: Number,
  lng: Number,
  // coordinates: CoordinatesSchema,
  phoneNumber: String,
  email: String,
  hashPassword: String,
  inventory: {type: Number, default: 0},
  pendingTrans: [TransactionSchema],
  previousTrans: [TransactionSchema],
  notifications: NotificationSchema,
  googleId: {type: String, required: true},
  createdAt: {type: Date, default: new Date()},
  googleImage: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;