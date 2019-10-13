'use strict';
const uuid = require('uuidv4').default;

const User = require('../models/user.models');
const Resto = require('../models/resto.models');
// const services = require('../../services');


// TODO: add emit of websocket here 🚀
exports.createPendTrans = async (req, res) => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
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
    res.status(200);
    res.json({ transaction, user, resto });
    // services.sockets.sendUserTransaction(transaction);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.updateNumBols = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId, 'pendingTrans.transId': req.body.transId },
      { $set: { 'pendingTrans.$.numBols': req.body.numBols } }
    );
    const resto = await Resto.findOneAndUpdate(
      { _id: req.body.restoId, 'pendingTrans.transId': req.body.transId },
      { $set: { 'pendingTrans.$.numBols': req.body.numBols } }
    );
    res.status(200);
    res.json({ user, resto }); // change to: user.pendingTrans and resto.pendingTrans
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

exports.updateInventory = async (req, res) => {
  try {
    //TODO: update inventory based on exchange type
    res.status(200);
    res.json({ user, resto });
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};