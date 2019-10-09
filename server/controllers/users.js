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

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.deleteOne({
      _id: req.body.id
    });
    res.status(204);
    res.json(user);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById({
      _id: req.params._id
    });
    res.status(200);
    res.json(user);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.createUserPendTrans = async (req, res) => {
  try {
    const transaction = {
      userId: req.body.userId,
      restoId: req.body.restoId
    };
    user = await User.findOneAndUpdate(
      {_id: req.body.userId},
      { $push: { pendingTrans: transaction } },
      { new: true }
    );  
    res.status(200);
    res.json(user);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.updateUserNumBols = async (req, res) => {
  try {
    const xxx = await User;
    res.status(200);
    res.json(xxx);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.createUserPrevTrans = async (req, res) => {
  try {
    const xxx = await User;
    res.status(200);
    res.json(xxx);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.deleteUserPendTrans = async (req, res) => {
  try {  
    const user = await User.findOneAndUpdate(
      {_id: req.body.userId},
      { $pull: { pendingTrans: { _id: req.body.transId } } },
      { new: true }
    );    
    res.status(200);
    res.json(user);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.updateUserInventory = async (req, res) => {
  try {
    const xxx = await User;
    res.status(200);
    res.json(xxx);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};
