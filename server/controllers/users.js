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

exports.getUserDetails = async (req, res) => {
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

// exports.changeNumBols

exports.changeNumBols = async (req, res) => {
  try {
    //TODO: the transactionId have to come from the websockets
    //TODO: define take and return
    const transactionId = req.params.id;
    if (take == true) {
      const numBols = await User.findByIdAndUpdate(
        {_id: transactionId},
        {$inc: {numBols: 1}},
        {new: true}
      );
      res.status(200);
      res.json(numBols);
    }
    else if (return == true) {
      const numBols = await User.findByIdAndUpdate(
        {_id: transactionId},
        {$inc: {numBols: -1}},
        {new: true}
      );
      res.status(200);
      res.json(numBols);
    }
  } catch (err) {
    res.status(500);
    res.send(err);  
  }
}
