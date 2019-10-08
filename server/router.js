'use strict';

const router = require('express').Router();
const restoContr = require('./controllers/restos');
const userContr = require('./controllers/users');

// User Endpoints
router.post('/user', userContr.createUser);
router.get('/user/:_id', userContr.getUserDetails);
router.get('/user/restos', restoContr.getRestos);
router.put('user/exchange/', userContr.changeNumBols);

// Admin Endpoints
router.get('/user', userContr.getUsers);
router.post('/user/restos', restoContr.createResto);
router.delete('/user/restos', restoContr.deleteResto);


module.exports = router;

// User:
// user/confirm => POST (updates numBols) with a new transactionId (subscribe to the websocket with this transactionId).
// user/cancel => DELETE (updates numBols) 
// (or take and another one for return) 


// Restaurants:
// 'restaurant/transactions?complete=false | ?complete=true' => GET 
// 'restaurant/order/:transaction-id/confirm' => PUT 
// 'restaurant/order/:transaction-id/deny' => DELETE
// 'restaurant/details' => GET
// 'restaurant/:payment' => GET (would be PUT as well)

// Admin:
// 'admin/' 
// 'admin/users => GET
// 'admin/restaurants' => GET
// 'admin/transactions' => GET