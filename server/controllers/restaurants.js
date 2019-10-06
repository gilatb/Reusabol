'use strict';

const Restaurant = require('../models/restaurants.models');

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(201);
    res.json(restaurants);
  } catch (err) {
    res.status(500);
    res.send(err);
  } 
};

exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201);
    res.json(restaurant);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};