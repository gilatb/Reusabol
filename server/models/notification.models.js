const mongoose = require('../db');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  firstNoti: {type: Boolean, default: false},
  secondNoti: {type: Boolean, default: false},
  lastNoti: {type: Boolean, default: false}
});

module.exports = NotificationSchema;
