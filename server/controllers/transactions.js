'use strict';
const uuid = require('uuidv4').default;

const User = require('../models/user.models');
const Resto = require('../models/resto.models');

exports.createPendTrans = async (req, res) => {
  const hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  minutes = minutes > 9 ? minutes : '0' + minutes;
  try {
    const transaction = {
      transId: uuid(),
      orderTime: `${hours}:${minutes}`,
      userId: req.body.userId,
      restoId: req.body.restoId,
      exchangeType: req.body.exchangeType,
      userFirstName: req.body.userFirstName,
      userLastName: req.body.userLastName,
      googleImage: req.body.googleImage,
      name: req.body.name,
    };
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { pendingTrans: transaction } },
      { new: true }
    );
    const resto = await Resto.findOneAndUpdate(
      { _id: req.body.restoId },
      { $push: { pendingTrans: transaction } },
      { new: true }
    );
    const socket = global.socket;
    // the RestoHome will listen to this event emmiter
    socket.broadcast.emit('resto-receive-transaction', resto.pendingTrans);
    res.status(200);
    res.json({ transaction, user, resto });
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send(err);
  }
};

exports.updateNumBols = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId, 'pendingTrans.transId': req.body.transId },
      { $set: { 'pendingTrans.$.numBols': req.body.numBols } },
      { new: true }
    );
    const resto = await Resto.findOneAndUpdate(
      { _id: req.body.restoId, 'pendingTrans.transId': req.body.transId },
      { $set: { 'pendingTrans.$.numBols': req.body.numBols } },
      { new: true }
    );
    const socket = global.socket;
    // the UserHome will listen to this event emmiter. 
    socket.broadcast.emit('user-receive-transaction', user.pendingTrans);
    res.status(200);
    res.json({ user, resto });
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.createPrevTrans = async (req, res) => {
  try {
    const transaction = {
      numBols: req.body.numBols,
      transId: req.body.transId,
      userId: req.body.userId,
      restoId: req.body.restoId
    };
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { previousTrans: transaction } },
      { new: true }
    );
    const resto = await Resto.findOneAndUpdate(
      { _id: req.body.restoId },
      { $push: { previousTrans: transaction } },
      { new: true }
    );
    res.status(200);
    res.json({ user, resto });
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.deletePendTrans = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $pull: { pendingTrans: { transId: req.body.transId } } },
      { new: true }
    );
    const resto = await Resto.findOneAndUpdate(
      { _id: req.body.restoId },
      { $pull: { pendingTrans: { transId: req.body.transId } } },
      { new: true }
    );
    res.status(200);
    res.json({ user, resto });
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

//TODO: add minimum inventory 0 in Resto and User models
exports.updateInventoryTake = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $inc: { inventory: req.body.numBols } }
    );
    const resto = await Resto.findByIdAndUpdate(
      { _id: req.body.restoId },
      { $inc: { inventory: -req.body.numBols } },
      // {validator: {}} //TODO: 
    );
    res.status(200);
    res.json({ user, resto });
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.updateInventoryReturn = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $inc: { inventory: -req.body.numBols } }
    );
    const resto = await Resto.findByIdAndUpdate(
      { _id: req.body.restoId },
      { $inc: { inventory: req.body.numBols } }
    );
    res.status(200);
    res.json({ user, resto });
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};


