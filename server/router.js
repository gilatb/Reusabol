'use strict';

const router = require('express').Router();
const controllers = require('./controllers/index');

// Users
router.get('/user/restaurants', controllers.getRestaurants);


// Restaurants


// Admins


module.exports = router;