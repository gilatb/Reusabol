'use strict';

const User = require('../models/user.models');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200);
    res.json(users);
  } catch (err) {
    res.status(500);
    res.send(err);
  } 
};