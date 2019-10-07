'use strict';

const Resto = require('../models/restaurants.models');

exports.getRestaurants = async (req, res) => {
  try {
    const restos = await Resto.find();
    res.status(200);
    res.json(restos);
  } catch (err) {
    res.status(500);
    res.send(err);
  } 
};

exports.createRestaurant = async (req, res) => {
  try {  
    const resto = await Resto.create(req.body);
    res.status(201);
    res.json(resto);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const resto = await Resto.deleteOne({ 
      id: req.body.id  
    });
    res.status(204);
    res.json(resto);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};
