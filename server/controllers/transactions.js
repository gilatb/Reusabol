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
      {_id: req.body.userId},
      { $push: { pendingTrans: transaction } },
      { new: true }
    ); 
    const resto = await Resto.findOneAndUpdate(
      { _id: req.body.restoId },
      { $push: { pendingTrans: transaction } },
      { new: true }
    );
    res.status(200);
    res.json({user, resto});
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};