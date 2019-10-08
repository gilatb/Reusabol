'use strict';

const router = require('express').Router();
const restoContr = require('./controllers/restos');
const userContr = require('./controllers/users');

//TODO: ?take ?return for post pendTrans

// User Endpoints
router.get('/user/:_id', userContr.getUserDetails);
router.get('/user/restos', restoContr.getRestos);
router.post('/user/pendTrans', userContr.createUserPendTrans);
router.put('/user/pendTrans/numBols', userContr.updateUserNumBols);
router.post('/user/prevTrans', userContr.createUserPrevTrans);
router.delete('/user/pendTrans', userContr.deleteUserPendTrans);
router.put('/user/inventory', userContr.updateUserInventory);

// Restaurant Endpoints
router.get('/resto/:_id', restoContr.getRestoDetails);
router.post('/resto/pendTrans', restoContr.createRestoPendTrans);
router.put('/resto/pendTrans/numBols', restoContr.updateRestoNumBols);
router.post('/resto/prevTrans', restoContr.createRestoPrevTrans);
router.delete('/resto/pendTrans', restoContr.deleteRestoPendTrans);
router.put('/resto/inventory', restoContr.updateRestoInventory);

// Admin Endpoints
router.post('/admin/user', userContr.createUser);
router.post('/admin/restos', restoContr.createResto);
router.get('/admin/users', userContr.getUsers);
router.get('/admin/restos', restoContr.getRestos);
router.delete('/admin/users', userContr.deleteUser);
router.delete('/admin/restos', restoContr.deleteResto);

module.exports = router;
