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
    const resto = await Resto.findById({
      _id: req.body.id
    });
    res.status(200);
    res.json(resto);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.createRestoPendTrans = async (req, res) => {
  try {
    const xxx = await Resto;
    res.status(200);
    res.json(xxx);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.updateRestoNumBols = async (req, res) => {
  try {
    const xxx = await Resto;
    res.status(200);
    res.json(xxx);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.createRestoPrevTrans = async (req, res) => {
  try {
    const xxx = await Resto;
    res.status(201);
    res.json(xxx);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.deleteRestoPendTrans = async (req, res) => {
  try {
    const resto = await Resto.findOneAndUpdate(
      {_id: req.body.restoId},
      { $pull: { pendingTrans: { _id: req.body.transId } } },
      { new: true}
    );
    res.status(204);
    res.json(resto);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};



exports.updateRestoInventory = async (req, res) => {
  try {
    const xxx = await Resto;
    res.status(200);
    res.json(xxx);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};
