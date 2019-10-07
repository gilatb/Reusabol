'use strict';

const router = require('express').Router();
const restoContr = require('./controllers/restos');


router.get('/user/restos', restoContr.getRestos);
router.post('/user/restos', restoContr.createResto);
router.delete('/user/restos', restoContr.deleteResto);



module.exports = router;