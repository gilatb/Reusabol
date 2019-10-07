'use strict';

const router = require('express').Router();
const restoContr = require('./controllers/restaurants');


router.get('/user/restaurants', restoContr.getRestaurants);
router.post('/user/restaurants', restoContr.createRestaurant);
router.delete('/user/restaurants', restoContr.deleteRestaurant);



module.exports = router;