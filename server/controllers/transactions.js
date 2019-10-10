'use strict';

const User = require('../models/user.models');
const Resto = require('../models/resto.models');

const uuid = require('uuidv4').default;

exports.createPendTrans = async (req, res) => {
  try {
    const transaction = {
      transId: uuid(),
      userId: req.body.userId,
      restoId: req.body.restoId
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
    res.json({ user, resto });
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.changeNumBols = async (req, res) => {
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
