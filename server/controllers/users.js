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
    res.json(user);  //TODO: WHERE/HOW CAN I ACCESS THIS ON THE FRONT-END?
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
      _id: req.params.id
    });
    res.status(200);
    res.json(user);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.getUserPendTrans = async (req, res) => {
  try {
    const user = await User.findById({
      _id: req.params.id
    });
    res.status(200);
    res.json(user.pendingTrans);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

//TODO: DELETE IF LINNEA EXPERIMENT DOESN'T WORK
exports.getUserByGoogleId = async (req, res) => {
  try {
    const user = await User.find({
      googleId: req.params.googleId
    });
    res.status(200);
    res.json(user);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};
