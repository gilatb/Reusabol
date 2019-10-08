mongoose = require('mongoose');

let user = {
 googleId: {
   type: String,
   required: true
 },
 displayName: {
   type: String
 },
 givenName: {
   type: String
 },
 createdAt: {
   type: Date,
   default: new Date()
 }
};
schema = new mongoose.Schema(user);

module.exports = mongoose.model('User', schema);