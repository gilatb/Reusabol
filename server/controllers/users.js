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

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201);
    res.json(user);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.getSpecificUser = async (req, res) => {
  try {
    const user = await User.findById({ 
      _id: req.body.id  
    });
    res.status(200);
    res.json(user);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};
