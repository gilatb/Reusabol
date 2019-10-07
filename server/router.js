'use strict';

const router = require('express').Router();
const restoContr = require('./controllers/restos');
const userContr = require('./controllers/users');

router.get('/user/restos', restoContr.getRestos);
router.post('/user/restos', restoContr.createResto);
router.delete('/user/restos', restoContr.deleteResto);

router.get('/user', userContr.getUsers);
router.post('/user', userContr.createUser);
router.get('/user/:_id', userContr.getSpecificUser);

module.exports = router;