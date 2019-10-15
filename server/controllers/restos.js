'use strict';

const Resto = require('../models/resto.models');

exports.getRestos = async (req, res) => {
  try {
    const restos = await Resto.find();
    res.status(200);
    res.json(restos);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.createResto = async (req, res) => {
  try {
    const resto = await Resto.create(req.body);
    res.status(201);
    res.json(resto);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.deleteResto = async (req, res) => {
  try {
    const resto = await Resto.deleteOne({
      _id: req.body.id
    });
    res.status(204);
    res.json(resto);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.getRestoDetails = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const resto = await Resto.findById(restaurantId);
    res.status(200);
    res.json(resto);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

// we don't need this when using the websocket
// exports.getRestoPendTrans = async (req, res) => {
//   try {
//     const { restaurantId } = req.params;
//     const resto = await Resto.findById(restaurantId);
//     res.status(200);
//     res.json(resto.pendingTrans);
//   } catch (err) {
//     res.status(500);
//     res.send(err);
//   }
// };

exports.getRestoByGoogleId = async (req, res) => {
  try {
    const user = await Resto.find({
      googleId: req.params.googleId
    });
    res.status(200);
    res.json(user);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

//For use in Postman only:
exports.updateRestoDetails = async (req, res) => {
  try {
    const resto = await Resto.findOneAndUpdate(
      { _id: req.params.restoId },
      { $set: { address: 'Carrer dAvila, 89, 08005 Barcelona' } }
    );
    res.status(200);
    res.json({ resto });
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};
