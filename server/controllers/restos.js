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

// TODO: add listener of websocket here 🚀
exports.getRestoPendTrans = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const resto = await Resto.findById(restaurantId);
    res.status(200);
    res.json(resto.pendingTrans);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

